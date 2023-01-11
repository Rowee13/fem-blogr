import { heroBgImage } from "../assets";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center relative bg-gradient-to-r from-hero-light-red to-hero-accent-red h-[600px] rounded-bl-[100px] object-cover overflow-hidden font-overpass">
      <img src={heroBgImage} alt="bg-pattern-desktop" className="" />
      <div className="absolute z-10 text-center text-white">
        <h1 className="font-ubuntu font-bold text-6xl pb-8">
          A modern publishing platform
        </h1>
        <p className="text-2xl pb-12">
          Grow your audience and build your online brand
        </p>
        <div className="font-bold text-lg">
          <button className="px-8 py-3 mr-5 bg-white text-hero-accent-red rounded-full hover:bg-light-red hover:text-white">
            Start for Free
          </button>
          <button className="px-8 py-3 border border-white bg-transparent rounded-full hover:bg-white hover:text-hero-accent-red">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
