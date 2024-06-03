import { zeyada } from "@/font";
import React from "react";
import Carousel from "../ui/carousel";

const Home = () => {
    // bg-gradient-to-r from-accent to-mood 
    // bg-accent
  return (
    <main className="min-h-screen bg-white relative z-20 p-10 flex w-screen">
      <aside className={``}></aside>
      <section className="w-full ">
        <div className="ml-8 mb-20">
      <div className="rounded-full w-40 h-40 z-10 absolute bg-gradient-to-r from-accent to-mood top-10 right-1/4"></div>
          <header className="flex justify-between ">
            <h1 className={`${zeyada.className}  text-6xl`}>Ojore</h1>
            <section className="relative z-20">
              <h1 className="text-[140px] leading-[140px] tracking-wider text-right font-medium">
                OJORE A<small className="text-sm">&copy;</small>
              </h1>
              <div className="flex mr-20">
                <span className="text-[140px] leading-[140px] tracking-wider font-medium">
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
          </header>
  
        </div>
        <Carousel />
      </section>
    </main>
  );
};

export default Home;
