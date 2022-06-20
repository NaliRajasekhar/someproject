//import logo from './logo.svg';
//import './App.css';
import{useState} from 'react';


  
  function App() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState();
  
    return (
      <div>
        <p>You submitted {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Prees me
        </button>
      </div>
    );
  }
  App()


export default App;
