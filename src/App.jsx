import './App.css';
import AdvancedCounter from './components/advanced_counter/AdvancedCounter';
import ClikCounter from './components/clik_counter/ClickCounter';
import Component from './components/custom_hook/CustomHook';
import Form from './components/form_example/FormExample';
import TimerWithRef from './components/timer_with_ref/TimerWithRef';
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

        <Component />

        <hr />

        <Form />
    </div>
  );
}

export default App;
