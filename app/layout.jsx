import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';
import { Header } from './components/Header';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata = {
  title: 'E-Uber',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={montserrat.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
