import BackToTopBtn from "./components/BackToTopBtn";
import Cta from "./components/Cta";

import Header from "./components/Header";
import About from "./components/About";
import Cars from "./components/Cars";
import  Why from "./components/Why";
import  Testimonial from "./components/Testimonial";

import  Footer from "./components/Footer";
import Hero from "./components/Hero";



export default function Home() {
  return (
  <main className='max-w-[1920px] bg-white mx-auto relative'>
    <Header />
    <Hero />
    <Why />
    <About />
  
    <Testimonial />
    <Cta />
    <Footer />
    <BackToTopBtn />
    <div className='h-[4000px]'></div>
  </main>

  )
}
