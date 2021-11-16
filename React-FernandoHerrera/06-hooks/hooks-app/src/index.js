import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import HooksApp from './HooksApp';
//import CounterApp from './components/01-useState/CounterApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
//import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
//import FocusScreen from './components/04-useRef/FocusScreen';
//import ReactExampleRef from './components/04-useRef/ReactExampleRef';
//import LayoutEffect from './components/05-useLayoutEffect/LayoutEffect';
//import Memorize from './components/06-memos/Memorize';
//import MemoHook from './components/06-memos/MemoHook';
//import CallbackHook from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import ToDoApp from './components/08-useReducer/ToDoApp';
import MainApp from './components/09-useContext/MainApp';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
