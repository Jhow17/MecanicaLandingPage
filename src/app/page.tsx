import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">

      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>

    </main>
    
  );
}
