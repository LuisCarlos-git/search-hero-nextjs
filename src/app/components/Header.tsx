import Image from 'next/image';

export const Header = () => {
  return (
    <header className="px-4 h-20 bg-marvel-custom-black flex justify-center items-center md:justify-between relative">
      <div className="flex items-center gap-4">
        <Image src="iron-man.svg" alt="logo website" width={50} height={50} />
        <strong className="text-white text-2xl md:block hidden">
          Marvel Strike Team
        </strong>
      </div>
      <button className="bg-marvel-red text-center px-4 py-2 text-white rounded md:block hidden">
        Your team
      </button>
    </header>
  );
};
