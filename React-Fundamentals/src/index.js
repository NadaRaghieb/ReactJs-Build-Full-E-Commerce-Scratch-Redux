import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {UseContextProvider} from './component/UseContextEx'
// 4- warp all app with provider

ReactDOM.render(
    <App/>,document.getElementById('root')
)
// ReactDOM.render(
// <UseContextProvider>
//     <App/>
// </UseContextProvider>
// , document.getElementById('root'))