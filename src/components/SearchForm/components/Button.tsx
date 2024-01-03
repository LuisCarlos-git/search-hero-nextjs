'use client';

import { useFormStatus } from 'react-dom';

export function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-marvel-red text-white h-12 px-3 rounded min-w-52"
    >
      {pending ? 'Searching...' : 'Search'}
    </button>
  );
}
