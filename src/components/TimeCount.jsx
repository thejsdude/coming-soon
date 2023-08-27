import Countdown from 'react-countdown';
import formatCountdown from './FormatCountdown';


const TimeCount=() =>{
  const launchDate = new Date('2023-09-01T00:00:00'); // Set your launch date and time here

  return (
    <div className="flex flex-col items-center min-h-screen mt-16  text-[#e8e8e8]">
      <header className="text-center">
        <Countdown date={launchDate} renderer={formatCountdown} onComplete={() => console.log('Countdown completed!')} />
      </header>
    </div>
  );
}

export default TimeCount;
