import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import AppBarComponent from './components/AppBar';
import MainComponent from './components/MainComponent';
import BottomBarComponent from './components/BottomBarComponent';

function App() {
  // const value = 'First SWAP APP Testing';
  // const url = "http://localhost:7071/api/HttpTrigger1?name=jamshed";
  // axios.get(url).then(response => {
  //   // do stuff
  //   console.log(response.data);
  // })
  // .catch(err => {
  //     // what now?
  //     console.log(err);
  // })
  return (
    <>
     <div className="app">
      <div className="content-holder">
        <div className="content">
          <AppBarComponent />
          <MainComponent />
        </div>
        </div>
          <BottomBarComponent />
        </div>
    </>
  ) 
}

export default App;