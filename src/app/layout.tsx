import '@/styles/global.css';
import Head from 'next/head';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
