import React,{ Component } from 'react';
import {
  Routes, 
  Route, 
} from "react-router-dom";
import Starter from './pages/Starter.js';

class App extends Component {
  render(){
    return (
      <Routes>
        <Route path="/"  element={<Starter />} /> 
      </Routes>
    );
  }
}

export default App;
