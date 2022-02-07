import React from 'react';
import './index.css';
import { render } from "react-dom"
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage/Homepage';
import SearchPage from './SearchPage/SearchPage';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
/*
render(
  <h1>hi</h1>,
  rootElement
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
