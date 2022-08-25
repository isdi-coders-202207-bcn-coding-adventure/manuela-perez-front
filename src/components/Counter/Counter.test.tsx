import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

const expectedInitalCountState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};
const mockSetTimeDate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [expectedInitalCountState, mockSetTimeDate],
}));

describe("Given a Counter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a counter with days, hours, minutes, seconds text", () => {
      render(<Counter />);

      const texts = [
        screen.getByText("days"),
        screen.getByText("hours"),
        screen.getByText("minutes"),
        screen.getByText("seconds"),
      ];

      texts.forEach((text) => {
        expect(text).toBeInTheDocument();
      });
    });
    test("Then it should call setTimeout method", () => {
      const mockedSetTimeout = jest.spyOn(global, "setTimeout");

      render(<Counter />);

      expect(mockedSetTimeout).toBeCalled();
    });
    test("Then it should call the setTimeDate", () => {
      jest.useFakeTimers();
      render(<Counter />);
      jest.advanceTimersByTime(1500);

      expect(mockSetTimeDate).toHaveBeenCalled();
    });
  });
});
