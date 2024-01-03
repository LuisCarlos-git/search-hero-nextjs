'use client';

import { useFormState } from 'react-dom';
import { submitForm } from './action';
import { Button } from './components/Button';

export function SearchForm() {
  const [, formAction] = useFormState(submitForm, null);

  return (
    <form
      action={formAction}
      className="w-full flex md:flex-row flex-col gap-4"
    >
      <input
        type="text"
        name="character"
        placeholder="Type in a character name"
        className=" px-4 w-full h-12 focus:border-marvel-custom-black rounded border-2 border-transparent outline-none"
      />
      <Button />
    </form>
  );
}