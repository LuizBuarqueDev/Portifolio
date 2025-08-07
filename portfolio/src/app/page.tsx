import { ProjectCards } from "@/components/ProjectCards";
import { Presentation } from "@/components/Presentation";

export default function Home() {
  return (
    <div className="bg-img-section">
      <main className="">
        <Presentation />
        <ProjectCards />
      </main>
    </div>
  );
}
