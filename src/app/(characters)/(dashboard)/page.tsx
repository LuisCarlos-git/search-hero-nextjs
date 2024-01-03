import { Metadata } from 'next';

import { Card, Grid } from '@/components';
import { SearchForm } from './SearchForm';

export const metadata: Metadata = {
  title: 'Strike team - dashboard',
  description: 'dashboard to search hero'
};

export default function Dashboard() {
  return (
    <main className="pb-8">
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
      <section className="max-w-[1366px] mx-auto mt-7">
        <h2 className="text-4xl text-black font-bold mb-3">#Results</h2>
        <Grid>
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
          <Card.Minimal />
        </Grid>
      </section>
    </main>
  );
}
