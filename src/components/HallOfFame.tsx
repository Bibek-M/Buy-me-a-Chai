import { FaTrophy } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import PeopleCard from "./PeopleCard";
const HallOfFame = () => {
  return (
    <div className="bg-amber-100 rounded-3xl w-full px-10 py-5 min-h-200 relative">
      <div className="flex items-center gap-2">
        <FaTrophy color="yellow" size={70} />
        <p className="text-5xl font-bold">Hall of Fame</p>
      </div>
      <div className="text-2xl px-4 mb-7">
        Amazing people who have supported my journey!
      </div>
      <div className="flex w-full flex-wrap gap-4 justify-center">
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
        <PeopleCard />
      </div>
      <button className="border-2 p-2 rounded-2xl absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 font-semibold ">
        View All Supporters <FaArrowRightLong />
      </button>
    </div>
  );
};

export default HallOfFame;
