import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <div className="flex justify-center bg-white dark:bg-black/70 dark:text-white xl:pt-[30px] lg:pt-0 md:pt-[40px] sm:pt-4 pt-[120px]">
        <div className="w-[1400px] md:p-5 p-2">
          <h2 className="xl:text-lg lg:text-sm text-xs font-light text-center">
            Get To Know More
          </h2>
          <h1 className="xl:text-4xl lg:text-2xl text-xl font-bold text-center tracking-widest mt-2">
            About Me
          </h1>
          <div className="flex xl:flex-row flex-col gap-5 xl:items-stretch items-center xl:mt-[80px] lg:mt-[40px] mt-[20px]">
            <div className="w-1/2 xl:h-[70vh] h-full relative flex xl:flex-row flex-col items-center xl:items-stretch">
              <div className="hidden md:block bg-blue-500 dark:bg-[#59b256] xl:h-4/5 xl:w-2/3 lg:w-[350px] lg:h-[450px] h-[350px] w-[250px] rounded-xl"></div>
              <div className="xl:h-4/5 xl:w-2/3 lg:w-[350px] lg:h-[450px] h-[350px] w-[250px] rounded-xl md:absolute xl:top-[50px] xl:left-[50px] lg:top-[40px] lg:left-[40px] md:top-[30px] md:left-[30px] top-[20px] left-[20px]">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src="/img/programmer.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col xl:gap-10 lg:gap-6 gap-8 xl:py-[100px] lg:py-[45px] md:py-[60px] sm:py-5 py-[20px]">
              <h1 className="text-justify sm:text-base text-sm">
                Hello! I'm Renie, a passionate React developer dedicated to
                creating captivating web applications. I'm on a mission to
                master the art of web development and bring innovative ideas to
                life through code.
              </h1>
              <div>
                <h2 className="md:text-xl text-lg font-medium mb-2">
                  Get in Touch
                </h2>
                <p className="text-justify sm:text-base text-sm">
                  I'm always open to new opportunities, collaborations, and
                  learning experiences. If you're interested in working
                  together, have a project in mind, or simply want to connect,
                  please don't hesitate to reach out to me at
                  <span className="underline text-bold ml-1">
                    renieadjani62@gmail.com
                  </span>
                  .
                </p>
              </div>
              <span className="sm:text-base text-sm">
                Let's learn, grow, and build amazing things together!
              </span>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
