'use server';

import { revalidatePath } from 'next/cache';
import { characterService } from '@/http/characters';
import { GetCharacterException } from '@/errors/services/GetCharaterException';

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
    revalidatePath('/');

    return {
      status: 'success'
    };
  } catch (e) {
    if (e instanceof GetCharacterException) {
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
