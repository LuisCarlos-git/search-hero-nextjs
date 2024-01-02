import { SearchForm } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strike team - dashboard',
  description: 'dashboard to search hero'
};

export default function Dashboard() {
  return (
    <main>
      <section
        className="h-72"
        style={{
          backgroundImage: 'url("background.png")'
        }}
      >
        <div className="flex justify-center items-start flex-col max-w-[670px] mx-auto my-0 h-full">
          <h1 className="text-5xl font-bold mb-9 text-white">
            Explore the most powerful <br /> characters in Marvel
          </h1>
          <SearchForm />
        </div>
      </section>
    </main>
  );
}
