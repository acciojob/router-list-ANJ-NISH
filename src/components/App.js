
import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './../styles/App.css';
import { ItemList } from "./ItemList";
import { ItemDetail } from "./ItemDetail";

const App = () => {
  return (
    <div>
        
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/items/:id" element={<ItemDetail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
