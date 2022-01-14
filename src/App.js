import logo from './logo.svg';

import Display from './components/Display';
import { Routes, Route, Link } from "react-router-dom";
import Result from './components/Result';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Example/>}/>
        <Route path="/Display" element={<Display/>}/>
      </Routes>
    
     
    
     
    </div>
  );
}

export default App;
