import { format } from 'date-fns';
const ClockDisplay = ({ date, timezone, offset, title }) => {
  const offsetHr = offset / 60;
  return (
    <div>
      <h1>Title: {title} </h1>
      <h3> {format(date, "dd-MM-yyyy hh:mm:ss aaaaa'm'")} </h3>
      <p>
        {timezone}
        {offsetHr > 0 ? `+${Math.abs(offsetHr)}` : `-${Math.abs(offsetHr)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
