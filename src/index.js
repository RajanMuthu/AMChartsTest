import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
const userDetails = {loginTime: new Date().toTimeString(), userName: 'Rajan'};

const renderApp = () =>
  render(
      <BrowserRouter>
        <App userDetails={userDetails}/>
      </BrowserRouter>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
