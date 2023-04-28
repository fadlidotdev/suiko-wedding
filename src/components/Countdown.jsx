import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const calculateTimeLeft = (dateTime) => {
  if (!dateTime) return null;

  const difference = +dateTime - +new Date();

  if (difference < 0) return null;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24)) || 0;
  const strDays = days < 10 ? `0${days}` : days.toString();

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24) || 0;
  const strHours = hours < 10 ? `0${hours}` : hours.toString();

  const minutes = Math.floor((difference / 1000 / 60) % 60) || 0;
  const strMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  const seconds = Math.floor((difference / 1000) % 60) || 0;
  const strSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();

  return {
    days: strDays,
    hours: strHours,
    minutes: strMinutes,
    seconds: strSeconds,
  };
};

function Countdown(props) {
  const { endDateTime, children, finishComponent, onFinish = () => {} } = props;

  const [isCountdownFinish, setIsCountdownFinish] = useState(false);

  const [timeLeft, setTimeLeft] = useState(null);

  const handleCalculateCountDown = () => {
    const value = calculateTimeLeft(endDateTime);

    if (!value) {
      setIsCountdownFinish(true);
      onFinish();
      return;
    }

    setTimeLeft(value);
  };

  useEffect(
    () => {
      if (!endDateTime) {
        setIsCountdownFinish(true);
        onFinish();
        return;
      }

      handleCalculateCountDown();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [endDateTime]
  );

  useEffect(() => {
    if (isCountdownFinish) return;

    const timer = setTimeout(handleCalculateCountDown, 500);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  });

  const contentRenderer = () => {
    if (isCountdownFinish) return finishComponent;

    if (!timeLeft) return null;

    return <div>{children(timeLeft)}</div>;
  };

  return <div>{contentRenderer()}</div>;
}

Countdown.propTypes = {
  children: PropTypes.func.isRequired,
  endDateTime: PropTypes.instanceOf(Date).isRequired,
  finishComponent: PropTypes.node,
  onFinish: PropTypes.func,
};

export default Countdown;
