'use server';

import { axiosInstance } from '@/http';

type Status = 'success' | 'error';

type FormState = {
  status: Status;
  error?: string;
} | null;

export async function submitForm(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const character = formData.get('character') as string;
  try {
    const response = await axiosInstance.get('/characters', {
      params: {
        nameStartsWith: character
      }
    });
    console.log(response.data.data);
    return {
      status: 'success'
    };
  } catch (e) {
    return {
      status: 'error',
      error: 'term not match'
    };
  }
}
