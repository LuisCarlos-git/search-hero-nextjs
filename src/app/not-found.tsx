import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-marvel-custom-black h-screen text-white flex-col flex justify-center items-center">
      <h2 className="text-4xl">Not Found</h2>
      <p className="mt-4">Could not find requested resource</p>
      <Link
        className="bg-marvel-red text-center px-4 py-2 text-white rounded mt-2"
        href="/"
      >
        Return dashboard
      </Link>
    </div>
  );
}
