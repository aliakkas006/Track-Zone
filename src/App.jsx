import { useState } from 'react';
import LocalClock from './components/local-clock';

const LOCAL_CLOCK_INIT = {
  title: 'My Local Clock',
  timezone: '',
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock = (data) => {
    setLocalClock({
      ...LocalClock,
      ...data,
    });
  };

  return (
    <div>
      <LocalClock clock={localClock} updateClock={updateLocalClock} />
    </div>
  );
}

export default App;
