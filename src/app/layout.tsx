export const metadata: Metadata = {
  title: 'Strike team - dashboard',
  description: 'dashboard to search hero'
};

import '@/styles/global.css';
import { Metadata } from 'next';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
