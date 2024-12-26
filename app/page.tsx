import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { VortexDemoSecond } from "@/components/vortexDemo";
import { WobbleCardDemo } from "@/components/wobblecardDemo";
export default function Home() {
  const words = " Brainly isn’t just a tool—it’s your digital second brain. Capture ideas, connect thoughts, and create clarity like never before. Welcome to the future of thinking."
  return (
    <div className="m-4 p-2 flex flex-col items-center space-y-10">
      <BackgroundBeamsWithCollision className="rounded-none flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          <Cover>Unlock the Power of Your Mind</Cover>
        </h2>
        <div className="relative flex w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-blue-500 via-green-500 to-teal-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="text-2xl md:text-5xl lg:text-6xl">Think Bigger. Think Brainly.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 py-4">
            <span className="text-2xl md:text-5xl lg:text-6xl">Think Bigger. Think Brainly.</span>
          </div>
        </div>

        <TextGenerateEffect  words={words} className="text-pretty max-w-2xl font-sans text-blue-400"/>
        
      </BackgroundBeamsWithCollision>
    
      <div className="h-[40rem] flex items-center justify-center mx-5">
      <TextHoverEffect text="BRAINLY" duration={0}/>
    </div>
    <WobbleCardDemo/>
    <VortexDemoSecond/>


    </div>
  );
}
