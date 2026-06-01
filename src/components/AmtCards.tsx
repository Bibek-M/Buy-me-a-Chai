import chai from "../assets/chai.png";
import { FaRupeeSign } from "react-icons/fa";
const AmtCards = (props :any) => {
  return (
    <div className="flex align-center gap-2 border-2 m-2 rounded-2xl p-2 border-gray-400 font-semibold hover:bg-amber-200 cursor-pointer">
      <img src={chai} alt="" className="h-12" />
      <div className="items-baseline">
        <FaRupeeSign className="inline-block" />
        {props.money}
        <div>{props.type}</div>
      </div>
    </div>
  );
};

export default AmtCards;
