import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-10T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-3 sm:gap-6 mb-8">
      <div className="flex flex-col items-center">
        <div className="bg-lime-500 text-black font-bold text-2xl sm:text-4xl lg:text-5xl w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 flex items-center justify-center rounded-lg shadow-lg">
          {String(timeLeft.days).padStart(2, '0')}
        </div>
        <span className="text-white text-xs sm:text-sm mt-2 font-medium">Dias</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-lime-500 text-black font-bold text-2xl sm:text-4xl lg:text-5xl w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 flex items-center justify-center rounded-lg shadow-lg">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-white text-xs sm:text-sm mt-2 font-medium">Hor</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-lime-500 text-black font-bold text-2xl sm:text-4xl lg:text-5xl w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 flex items-center justify-center rounded-lg shadow-lg">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-white text-xs sm:text-sm mt-2 font-medium">Min</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-lime-500 text-black font-bold text-2xl sm:text-4xl lg:text-5xl w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 flex items-center justify-center rounded-lg shadow-lg">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <span className="text-white text-xs sm:text-sm mt-2 font-medium">Seg</span>
      </div>
    </div>
  );
}
