import './App.css';
import AdvancedCounter from './components/advancedCounter/AdvancedCounter';
import ClikCounter from './components/clik_counter/ClickCounter';

function App() {
  return (
    <div className="App">
        <ClikCounter />

        <hr/>

        <AdvancedCounter/>

        <hr />
    </div>
  );
}

export default App;
