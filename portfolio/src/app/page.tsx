import { Footer } from "@/components/Foooter";
import { Header } from "@/components/Header";
import { Presentation } from "@/components/Presentation";

export default function Home() {
  return (
    <div>
        <Header />
      <main className="flex">
        <Presentation />
      </main>
      <Footer />
    </div>
  );
}
