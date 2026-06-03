import chai2 from "../assets/chai2.png";
const PeopleCard = () => {
  let rgb1 = Math.floor(Math.random() * 254);
  let rgb2 = Math.floor(Math.random() * 254);
  let rgb3 = Math.floor(Math.random() * 254);
  return (
    <div className="bg-white h-35 w-175 p-5 flex gap-5 rounded-2xl border shrink-0">
      <div
        className="h-10 w-10 rounded-full px-2 py-2 flex justify-center font-semibold"
        style={{ backgroundColor: `rgb(${rgb1},${rgb2},${rgb3}` }}
      >
        R
      </div>
      <div className="pr-20">
        <div className="font-semibold">Rahul Kumar</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          voluptates!
        </div>
        <div>2 hours ago</div>
      </div>
      <div className="flex items-baseline pr-10">
        <div className="text-2xl">Rs250</div>
        <img src={chai2} alt="chai" className="h-10" />
      </div>
    </div>
  );
};

export default PeopleCard;
