import chai2 from '../assets/chai2.png'
import { FaHeart } from "react-icons/fa";
import {Lock} from 'lucide-react';
import AmtCards from './AmtCards';
const LeftHome = () => {
  return (
    <div className="w-4/7">
      <h2 className="text-7xl font-bold">
        Fuel My Creativity with
        <h2 className="h-19 inline-block align-baseline text-amber-800">
          &nbsp;chai
        </h2>
        <img
          src={chai2}
          alt="chai img"
          className="h-19 inline-block align-baseline"
        />
      </h2>
      <div className="text-2xl pt-5">
        If you Enjoy my work and Projects, consider buying me a chai Your
        support helps me blend more ideas and keep going! &nbsp;
        <FaHeart
          color="red"
          className="inline-block align-baseline -mb-0.5 ml-1"
        />
      </div>
      <div>
        <h1 className="font-semibold text-2xl">Choose an amount</h1>
        <div className="flex mt-5">
          <AmtCards money="5" type="chai" />
          <AmtCards money="25" type="Masala chai" />
          <AmtCards money="50" type="Royal chai" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">
          Add a Note
          <h1 className="inline text-gray-600"> (Optional)</h1>
        </h1>
        <textarea
          className="border-2 m-2 rounded-2xl p-2 border-gray-400 font-semibold w-full h-20"
          placeholder="Share a message with me..."
        ></textarea>
      </div>
      <div className="flex items-center">
        <button className="text-2xl bg-amber-800 rounded-2xl py-2 mx-3 flex justify-center px-8 my-4 text-white cursor-pointer">
          Buy me a Chai
        </button>
        <Lock/>
        <div className="text-2xl font-semibold"> Secure Payment powered by razorpay</div>
      </div>
    </div>
  );
}

export default LeftHome