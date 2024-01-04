'use server';

import { characterService } from '@/http/characters';

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
    const response = await characterService.getCharacter(character);
    if (!response.results.length) {
      throw new Error('Hero not found');
    }
    console.log(response.results);
    return {
      status: 'success'
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        status: 'error',
        error: e.message
      };
    }

    return {
      error: 'error on marvel API',
      status: 'error'
    };
  }
}
