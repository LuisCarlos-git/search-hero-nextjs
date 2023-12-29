import { Header } from '@/components';

export default function PagesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
