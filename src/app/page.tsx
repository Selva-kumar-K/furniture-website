import About from "@/components/About";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <main>
      <Header />
      <ProductSection/>
      <About/>
      <ProjectsSection/>
    </main>
  );
}
