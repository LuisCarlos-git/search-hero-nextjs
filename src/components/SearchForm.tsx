'use client';

export function SearchForm() {
  return (
    <form className="w-full flex md:flex-row flex-col gap-4">
      <input
        type="text"
        placeholder="Type in a character name"
        className=" px-4 w-full h-12 focus:border-marvel-custom-black rounded border-2 border-transparent outline-none"
      />
      <button className="bg-marvel-red text-white h-12 px-3 rounded min-w-52">
        Search
      </button>
    </form>
  );
}
