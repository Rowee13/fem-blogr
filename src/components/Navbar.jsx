import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="absolute top-0 inset-x-0 flex flex-row items-center justify-between px-36 py-12 bg-transparent z-10 font-overpass font-bold text-white">
      <div className="flex flex-row items-center">
        <img src={logo} alt="blogr" className="h-8" />
        <h1>Blogr</h1>
      </div>
      <div>
        <button className="px-12 py-3 hover:underline">Login</button>
        <button className="bg-white text-hero-accent-red px-10 py-3 rounded-full hover:bg-light-red hover:text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
