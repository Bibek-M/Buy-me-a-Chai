import chai from "../assets/chai.png";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="border-b-2 pt-7 px-8 mx-25 flex justify-between">
      <div>
        <div className="flex items-center">
          <img src={chai} alt="chai" className="h-20" />
          <div className="imperial-script-regular text-5xl">Buy me a chai</div>
        </div>
        <div className="w-70 font-semibold ml-5">
          Every chai brings more ideas to life and turns them into real projects
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">LINKS</h2>
        <div className="mt-2">
          <p>Support</p>
          <p>Hall Of Fame</p>
          <p>About</p>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Social</h3>
        <div className="flex h-20 gap-2.5 mt-5">
          <FaGithub size={40} />
          <RiTwitterXLine size={40} />
          <FaLinkedin size={40} />
          <MdOutlineMail size={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;