import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main/index.less';
import App from './modules/App.js';
import reportWebVitals from './reportWebVitals';
import '../node_modules/antd/lib/style/themes/dark.less';
import '../node_modules/antd/dist/antd.less';
import './translations/i18n';
import Parse from "parse";

Parse.initialize("backmyAppId", "", "backmyMasterKey");
Parse.masterKey = "backmyMasterKey";
Parse.serverURL = "http://localhost:1337/parse";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
