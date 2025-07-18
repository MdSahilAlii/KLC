// app/layout.tsx
import "./globals.css";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocomotiveScrollProvider from "@/components/LocomotiveScrollProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        {/* <LocomotiveScrollProvider> */}
          <main data-scroll-container>
            <Navbar />
            {children}
            <Footer />
          </main>
        {/* </LocomotiveScrollProvider> */}
      </body>
    </html>
  );
}
