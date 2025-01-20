import About from "@/components/About";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import ProductViewSection from "@/components/ProductViewSection";
import ProjectsSection from "@/components/ProjectsSection";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Header />
      <ProductSection/>
      <About/>
      <ProjectsSection/>
      <ProductViewSection/>
      <Testimonials/>
    </main>
  );
}
