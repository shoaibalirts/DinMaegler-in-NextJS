import { LoginProvider } from '@/store/login-context';
import "./globals.css";

export const metadata = {
  title: "Din mægler",
  description:
    "It is developed for real estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><LoginProvider>{children}</LoginProvider></body>
    </html>
  );
}
