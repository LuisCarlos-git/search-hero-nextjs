import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/styles/global.css';

import { Header } from '@/app/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Search hero - Dashboard',
  description: 'dashboard to search and list heros'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
