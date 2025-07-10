
import "./globals.css";
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Your App',
  description: 'Courses Page',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
