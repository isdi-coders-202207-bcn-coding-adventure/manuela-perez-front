import { useEffect, useState } from "react";
import limitDate from "../../data/date";
import { CounterStyled } from "./CounterStyled";

export interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = (): JSX.Element => {
  const initialTime: Time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [timeDate, setTimeDate] = useState(initialTime);

  const calculateDateLeft = () => {
    const difference = +new Date(limitDate) - +new Date();
    const timeCalculated: Time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    setTimeDate(timeCalculated);
  };

  useEffect(() => {
    setTimeout(() => {
      calculateDateLeft();
    }, 1000);
  });

  return (
    <>
      <CounterStyled>
        <li>
          <span className="counter__number">{timeDate.days}</span>
          <span className="counter__name">days</span>
        </li>
        <li>
          <span className="counter__number">{timeDate.hours}</span>
          <span className="counter__name">hours</span>
        </li>
        <li>
          <span className="counter__number">{timeDate.minutes}</span>
          <span className="counter__name">minutes</span>
        </li>
        <li>
          <span className="counter__number">{timeDate.seconds}</span>
          <span className="counter__name">seconds</span>
        </li>
      </CounterStyled>
    </>
  );
};

export default Counter;
