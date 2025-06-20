import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Courses/>
    <Teachers/>
    <Testimonials/>
    <Footer/>
   </div>
  );
}
