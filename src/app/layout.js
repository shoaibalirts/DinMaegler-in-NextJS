import { LoginProvider } from '@/store/login-context';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Din mægler",
  description:
    "This is a website with responsive design. It is developed for real estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><LoginProvider>{children}</LoginProvider></body>
    </html>
  );
}
