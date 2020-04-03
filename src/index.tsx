import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {initStores} from "./Stores";
import {Routes} from "./Routes";
import { AppContainer } from "react-hot-loader";

const stores = initStores();

const render = () =>{
  ReactDOM.render(
    <AppContainer>
      <Routes stores={stores} />
    </AppContainer>,
    document.getElementById("root")
  )
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

