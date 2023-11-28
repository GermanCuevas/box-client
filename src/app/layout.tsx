import type { Metadata } from 'next';
import './globals.css';
//font
import { roboto } from '../../public/fonts/fonts';
//redux
import { Providers } from '@/store/Providers';

export const metadata: Metadata = {
  title: 'Box',
  description: 'Repartos'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
