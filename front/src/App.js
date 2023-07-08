import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react'
import Home from './Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      
      </Routes>
    </Router> 
  );
}

export default App;
