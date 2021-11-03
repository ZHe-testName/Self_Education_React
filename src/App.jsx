import './App.css';
import AdvancedCounter from './components/advanced_counter/AdvancedCounter';
import Classes from './components/classes_component/ClassesComponent';
import ClikCounter from './components/clik_counter/ClickCounter';
import Component from './components/custom_hook/CustomHook';
import WithRefForm from './components/form_example/FormExample';
import Form from './components/form_example/FormExample';
import UsersList from './components/lists/UsersList';
import Wrapper from './components/memo/Memo';
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

        <hr />

        <UsersList />

        <hr />

        <Wrapper />

        <hr />

        <Classes />
    </div>
  );
}

export default App;
