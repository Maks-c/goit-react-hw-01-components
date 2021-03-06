import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {createGlobalStyle} from "styled-components";

//================================глобальные стили
const Global = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Consolas;
    }
`



ReactDOM.render(
  <React.StrictMode>
      <>
          <Global/>
          <App />
      </>

  </React.StrictMode>,
  document.getElementById('root')
);






