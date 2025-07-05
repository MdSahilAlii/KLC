import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import LocomotiveScrollProvider from "@/components/LocomotiveScrollProvider";
import HeroBanner from "@/components/HeroBanner";
import HeroC from "@/components/HeroC";




export default function Home() {
  return (
     
   <div>
    <LocomotiveScrollProvider>
    <Navbar/>
   {/* <Hero/> */}
    <HeroBanner/>
    {/* <HeroC/> */}
    <Courses/>
    <Teachers/>
    <Testimonials/>
    <Footer/>
    </LocomotiveScrollProvider>
   </div>
   
  );
}
