import mainChai from '../assets/mainChai.png'
import headshot from '../assets/headshot.png'
const RightHome = () => {
  return (
    <div>
      <img src={mainChai} alt="ChaiImg" className="h-110 w-210 ml-5" />
      <div className="bg-amber-300 rounded-3xl px-12 h-27 w-120 ml-40 flex justify-between items-center pt-3">
        <img src={headshot} alt="headShot" className="h-17 w-17 rounded-full" />
        <div>
          <p className="font-semibold">Thanks for being awesome!</p>
          <p className="font-semibold">Your Support truly means a lot.</p>
          <p className="imperial-script-regular text-2xl">-Bibek</p>
        </div>
      </div>
    </div>
  );
}

export default RightHome