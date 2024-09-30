import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = "cereBroX"
  },[]);
  return (
    <div className="App">
      Hello World...!
    </div>
  );
}

export default App;
