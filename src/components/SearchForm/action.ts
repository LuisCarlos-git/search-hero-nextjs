'use server';

type Status = 'success' | 'error';

type FormState = {
  status: Status;
  error?: string;
} | null;

export async function submitForm(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const character = formData.get('character');
  try {
    if (character !== 'miranha') throw new Error('term not match');
    return new Promise(r =>
      setTimeout(() => {
        r({
          status: 'success'
        });
      }, 2000)
    );
  } catch (e) {
    return {
      status: 'error',
      error: 'term not match'
    };
  }
}
