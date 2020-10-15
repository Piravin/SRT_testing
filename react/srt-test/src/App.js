import React from 'react';
import LoginForm from './components/loginComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import DataPage from './components/dataPage';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configStore';
import Meter from './components/meter';

const store = configureStore();

function App() {
  
  return (
    <Provider store={store}>
    <div className="App dp">
         <DataPage/>
        {/* <Meter primary = "1000"/> */}
    </div>
    </Provider>
  );
}

export default App;
