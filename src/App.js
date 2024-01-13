import React from 'react';
import Home from './screens/Home';
import ShowSummary from './screens/ShowSummary';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:showId" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
