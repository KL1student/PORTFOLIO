import { Hero } from "@/components/Hero";
import { AboutBento } from "@/components/AboutBento";
import { Experience } from "@/components/Experience";
import { ProjectsBento } from "@/components/ProjectsBento";
import { AcademicsBento } from "@/components/AcademicsBento";
import { Achievements } from "@/components/Achievements";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutBento />
      <Experience />
      <ProjectsBento />
      <AcademicsBento />
      <Achievements />
      <ContactForm />
      <Footer />
    </div>
  );
}
