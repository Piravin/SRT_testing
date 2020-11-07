import React,{useState} from 'react';
import LoginForm from './components/loginComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DataPage from './components/dataPage';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configStore';
import Cookies from 'js-cookie';
import Meter from './components/meter';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
// import  UserContextProvider  from './components/authComponent';

const store = configureStore();

function App() {
  return (
    // <UserContextProvider>
    <Provider store={store}>
      <DataPage id="data"/>
    </Provider>
    // </UserContextProvider>
  );
}

export default App;
