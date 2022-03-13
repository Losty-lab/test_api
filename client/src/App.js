import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage,selectMessage} from './Redux/Actions/indexAction'


function App() {

  const dispatch=useDispatch()
  const messageResult=useSelector(selectMessage)

  console.log('MESSAGERESULT',messageResult)

  function sendMessageAction(){

    dispatch(sendMessage())

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {messageResult.message} Test Production
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={sendMessageAction}>Receive Message</button>
    </div>
  );
}

export default App;
