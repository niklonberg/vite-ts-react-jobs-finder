import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero = ({
  title = "Become a React Developer",
  subtitle = "Find the React job that fits you & your skill set",
}: HeroProps) => {
  return (
    <section
      className="bg-indigo-700 py-20 px-4 mb-4
     text-center"
    >
      <h1 className="font-extrabold text-white mb-4 text-4xl sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <h2 className="text-xl text-white">{subtitle}</h2>
    </section>
  );
};

export default Hero;
