const formatCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  gap-3 ">
      <div className="text-center w-40 h-40 flex flex-col justify-center items-center rounded-2xl bg-[#413c69] ">
        <div className="text-6xl font-bold text-[#dcd6f7]">{days}</div>
        <div className="bg-[#413c69] text-[#dcd6f7]  font-bold pt-2">Days</div>
      </div>
      <div className="text-center w-40 h-40 flex flex-col justify-center items-center rounded-2xl bg-[#413c69] ">
        <div className="text-6xl font-bold text-[#dcd6f7]">{hours}</div>
        <div className="text-[#dcd6f7] font-bold pt-2">Hours</div>
      </div>
      <div className="text-center w-40 h-40 flex flex-col justify-center items-center rounded-2xl bg-[#413c69] ">
        <div className="text-6xl font-bold text-[#dcd6f7]">{minutes}</div>
        <div className="bg-[#413c69] text-[#dcd6f7]  font-bold pt-2">
          Minutes
        </div>
      </div>
      <div className="text-center w-40 h-40 flex flex-col justify-center items-center rounded-2xl bg-[#413c69] ">
        <div className="text-6xl font-bold text-[#dcd6f7]">{seconds}</div>
        <div className="bg-[#413c69] text-[#dcd6f7]  font-bold pt-2">
          Seconds
        </div>
      </div>
    </div>
  );
};
export default formatCountdown;
