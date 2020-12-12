import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Nav, Header, Welcome, Featured } from './sections';

render(
  <React.StrictMode>
    <Nav title = 'Griot Theater Company' />
    <Header title = 'test'/>
    <Welcome title = 'testing' />
    <Featured title = 'testing again'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
