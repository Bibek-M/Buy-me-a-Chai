import kettle from '../assets/kettle.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
const More = () => {
  return (
    <div className="flex bg-amber-500 mx-25 px-20 justify-around items-center rounded-2xl py-2">
      <img src={kettle} alt="kettle" className="h-30" />
      <div>
        <h2 className='text-2xl font-semibold'>Want to do More ?</h2>
        <p className='w-80'>
          Share my work with your friends or get in touch for collaborations
        </p>
      </div>
      <div className='flex gap-4'>
        <button className="flex border px-5 py-2 rounded-xl font-semibold items-center gap-2">
          <FiShare />
          <p>Share</p>
        </button>
        <button className="flex bg-amber-900 text-white px-5 py-2 rounded-2xl items-center gap-2">
          <p>Get in touch</p>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default More