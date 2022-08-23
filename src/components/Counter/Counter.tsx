import { CounterStyled } from "./CounterStyled";

const Counter = (): JSX.Element => {
  return (
    <>
      <CounterStyled>
        <li>
          <span className="counter__number">02</span>
          <span className="counter__name">days</span>
        </li>
        <li>
          <span className="counter__number">20</span>
          <span className="counter__name">hours</span>
        </li>
        <li>
          <span className="counter__number">34</span>
          <span className="counter__name">minutes</span>
        </li>
        <li>
          <span className="counter__number">09</span>
          <span className="counter__name">seconds</span>
        </li>
      </CounterStyled>
    </>
  );
};

export default Counter;
