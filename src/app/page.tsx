import { About } from "@/components/About";
import { Internship } from "@/components/Internship";
import { MyWorks } from "@/components/MyWorks";
import { SparklesPreview } from "@/components/PortfolioTitle";
import { Skills } from "@/components/Skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className=" h-[1000px] m-0 p-0">
      <SparklesPreview/>
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 " id="about">
        <div className="text-center text-5xl text-white">About Me</div>
        <About/>
      </div>
      <div className="bg-gradient-to-b from-slate-900 to-slate-950" id="skills">
        <div className="text-center text-5xl text-white mb-20">Skills</div>
        <Skills/>
      </div>
      <div className="bg-gradient-to-b from-slate-950 to-black pb-28" id="internship">
        <div className="text-center text-5xl text-white pt-10 mb-10">Internship</div>
        <Internship/>
      </div>
      <div className="bg-black pb-28" id="works">
        <div className="text-center text-5xl text-white pt-10 mb-10">My Works</div>
        <MyWorks/>
      </div>
      <div>
        <Footer/>
      </div>
      
      
    </main>
  );
}
