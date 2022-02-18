import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Plus from './Plus';

ReactDOM.render(
  <React.StrictMode>
    <App 
    src="https://vcdn-thethao.vnecdn.net/2021/12/13/2-jpeg-1639413745-3590-1639413816.jpg"
    name="Nguyen Van A"
    desc="i am react developer"
    />
    <Plus/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
