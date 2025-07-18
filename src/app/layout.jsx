
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins } from 'next/font/google';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
