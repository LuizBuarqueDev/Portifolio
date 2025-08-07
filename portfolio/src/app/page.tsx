import { ProjectCards } from "@/components/ProjectCards";
import { Presentation } from "@/components/Presentation";
import { Skills } from "@/components/Skills";
import { Json } from "@/components/Json";

export default function Home() {
  return (
    <div className="bg-img-section">
      <main className="main">
        <Presentation />
        <Json />
        <ProjectCards />
        <Skills/>
      </main>
    </div>
  );
}
