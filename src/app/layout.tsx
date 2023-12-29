import { Metadata } from 'next';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Strike team - dashboard',
  description: 'dashboard to search hero'
};

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
