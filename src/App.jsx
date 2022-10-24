import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: edt } = useClock('EDT');
  const { clock: bst } = useClock('BST');
  const { clock: mst } = useClock('MST');
  const { clock: pakistani } = useClock('UTC', 5 * 60);

  console.log('Local UTC', local.date);
  console.log('EST', est.date);
  console.log('PST', pst.date);
  console.log('EDT', edt.date);
  console.log('BST', bst.date);
  console.log('MST', mst.date);
  console.log('PAKISTANI', pakistani.date);

  return (
    <div>
      <h1>Track Zone</h1>

      <LocalClock />
      <ClockList />
    </div>
  );
}

export default App;
