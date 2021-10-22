import './App.css';
import AdvancedCounter from './components/advanced-counter/AdvancedCounter';
import ClikCounter from './components/clik_counter/ClickCounter';
import TimerWithRef from './components/timer-with-ref/TimerWithRef';
import UseCallbackExample from './components/use_callback_example/UseCallbackExample';
import UseMemoExample from './components/use_memo_example/UseMemoExample';

function App() {
  return (
    <div className="App">
        <ClikCounter />

        <hr/>

        <AdvancedCounter/>

        <hr/>

        <TimerWithRef />

        <hr/>

        <UseMemoExample />

        <hr/>

        <UseCallbackExample />

        <hr/>
    </div>
  );
}

export default App;
