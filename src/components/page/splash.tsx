import { zeyada } from "@/font";
import Image from "next/image";
import { SetStateAction } from "react";

type SplashProps = {
    navigate: React.Dispatch<SetStateAction<boolean>>
}

export default function Splash({ navigate }: SplashProps) {
  return (
    <main className={`text-light min-h-screen relative bg-dark`}>
      <div className="rounded-full w-60 h-60 absolute bg-gradient-to-r from-accent to-mood top-20 left-20"></div>
      <section className="absolute bottom-20 right-20">
        <h1 className="text-[168px] leading-[168px] tracking-wider text-right font-medium">
          OJORE A<small className="text-sm">&copy;</small>
        </h1>
        <div className="flex mr-20">
          <span className="text-[168px] leading-[168px] tracking-wider font-medium">
            CHRIS
          </span>
          <ul className="mt-4 text-base tracking-wider font-[200]">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next JS</li>
          </ul>
        </div>
      </section>
      <button className="absolute bottom-10 right-20 bg-gradient-to-r from-accent to-mood  text-dark text-2xl tracking-wide rounded-full fount-bold px-10 py-4 transition-transform ease-in hover:bg-transparent hover:ring-2 hover:ring-accent hover:scale-105"
      onClick={() => navigate(true)}
      >
        Portfolio
      </button>
    </main>
  );
}
