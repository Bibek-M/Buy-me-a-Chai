import chai from '../assets/chai.png'
import { FiGithub } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="left flex justify-center items-center">
        <img
          src={chai}
          alt="img not available"
          className="h-15 cursor-pointer"
        />
        <p className="imperial-script-regular text-black text-5xl cursor-pointer">
          Buy me a Chai
        </p>
      </div>
      <div className="mid flex gap-4">
        <div className="cursor-pointer  hover:border-b-3 border-amber-400 font-semibold text-2xl">
          Support
        </div>
        <div className="hover:border-b-3 border-amber-400 font-semibold text-2xl cursor-pointer">
          Hall of fame
        </div>
        <div className="hover:border-b-3 border-amber-400 font-semibold text-2xl cursor-pointer">
          About
        </div>
      </div>
      <div className="end flex items-center gap-4">
        <button className="cursor-pointer">
          {" "}
          <FiGithub size={40} />{" "}
        </button>
        <button className="bg-amber-800 text-white text-2xl rounded-2xl px-3 py-1 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar