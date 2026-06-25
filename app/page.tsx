import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { SaaSProducts } from "@/components/sections/SaaSProducts";
import { Process } from "@/components/sections/Process";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { WhyAmix } from "@/components/sections/WhyAmix";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Projects />
      <SaaSProducts />
      <Process />
      <Testimonials />
      <TechStack />
      <WhyAmix />
      <Contact />
      <Footer />
    </main>
  );
}
