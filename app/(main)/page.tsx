"use client";

import { TypeAnimation } from "react-type-animation";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full font-mono">
      <section className="min-h-[calc(100vh-80px)] flex justify-between px-10">
        <div className="flex flex-col gap-2 px-25 justify-center tracking-wide-5xl ">
          <p className="font-sans text-xl text-white ">Hello!, I'm</p>

          <TypeAnimation
            sequence={["Ian Divinagracia", 1000]}
            wrapper="p"
            speed={50}
            className="font-semibold font-sans text-6xl text-[#0bdbfb]"
            repeat={2}
          />
          <p className="font-sans text-xl  text-white mb-2">Web Developer</p>
          <p className="text-gray-400 text-wrap w-150 tracking-widest">
            I love building system the solves one's problem. I am passionate
            about creating systems thats cater my clients need. I dedicate all
            my time to perfecting my craft.
          </p>
        </div>

        <div className=" flex flex-col px-10 gap-2 items-start justify-center text-white  ">
          <div className="w-135 h-auto rounded-lg  bg-[#061e3b19] border border-[#0bdbfb] shadow-md shadow-[#026a7a] hover:scale-105  transition-all ease-in-out duration-600">
            <p className=" font-sans  text-sm px-5 py-3 text-white bg-[#011215] rounded-t-lg">
              {" "}
              Quick Info
            </p>

            <section className=" py-3 px-5 flex flex-col gap-1 text-sm  ">
              <div className=" grid grid-cols-[132px_1fr]  gap-y-4 text-gray-400">
                <span className="text-gray-300 font-semibold">Name</span>
                <span>Ian Red Divinagracia</span>

                <span className="text-gray-300 font-semibold">Origin</span>
                <span>Calamba, Philippines</span>

                <span className="text-gray-300 font-semibold">Stack</span>
                <span>HTML • CSS • JavaScript • TypeScript</span>

                <span className="text-gray-300 font-semibold ">Frameworks & Libraries</span>
                <span>Next.js • React • shadcn ui • Clerk • Cloudinary</span>

                <span className="text-gray-300 font-semibold ">Tools</span>
                <span>Figma • Canva • VS Code • Git</span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
