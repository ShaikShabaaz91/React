import React from "react";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              I specialize in Web Developer with
              Javascript,Angular,Bootstrap,React Js and I'm well-versed in
              various programming languages, frameworks, and tools. My
              experience includes ERP softwares and Apps. Whether it's designing
              scalable web applications, optimizing database performance, or
              creating intuitive user interfaces,
            </p>
            <p className="mt-4 text-gray-600">
              I'm driven by a commitment to excellence. As a software engineer,
              I'm not just building lines of code; I'm building solutions that
              impact people's lives. My commitment to delivering high-quality
              software is unwavering. I take pride in writing clean,
              maintainable code, conducting rigorous testing, and ensuring the
              reliability and security of the systems I create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
