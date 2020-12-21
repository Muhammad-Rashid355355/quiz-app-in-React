import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom"

import NewScreen from './components/Screens/NewScreen';
import HomeScreen from './components/Screens/HomeScreen';

const App: FC = () => {

  return (
    <BrowserRouter>
      <div >
        <Route exact path="/" component={HomeScreen} />
        <Route path="/quiz" component={NewScreen} exact />


      </div>
    </BrowserRouter>
  );
}

export default App;
