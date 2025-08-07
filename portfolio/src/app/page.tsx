import { ProjectCards } from "@/components/ProjectCards";
import { Presentation } from "@/components/Presentation";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-img-section">
      <main className="main">
        <Presentation />
        <ProjectCards />
        <Skills/>
      </main>
    </div>
  );
}
