import ClockListItem from './clock-list-item';

const ClockList = ({ localClock, clocks, updateClock, deleteClock }) => {
  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />

      {clocks.length === 0 ? (
        <p>Theres is no clock.Please create one!</p>
      ) : (
        clocks.map((clock) => (
          <ClockListItem
            key={clock.id}
            clock={clock}
            localClock={localClock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        ))
      )}
    </div>
  );
};

export default ClockList;
