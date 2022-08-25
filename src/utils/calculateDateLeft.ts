import { Time } from "../components/Counter/Counter";
import limitDate from "./limitDate";

const calculateDateLeft = () => {
  const difference = +new Date(limitDate) - +new Date();
  const timeCalculated: Time = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
  return timeCalculated;
};

export default calculateDateLeft;
