import * as React from 'react';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from './pages/Container';
import Fmcg from './pages/Fmcg';
import Retail from './pages/Retail';
import Fashion from './pages/Fashion';
import Chemical from './pages/Chemical';
import Auto from './pages/Auto';
import Care from './pages/Care';
import Tech from './pages/Tech';
import Lcl from './pages/Lcl';
import Air from './pages/Air';
import House from './pages/House';
import Sailing from './pages/Sailing';
import Track from './pages/Track';
function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Container" element={<Container />} />
          <Route path="/Fmcg" element={<Fmcg />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Chemical" element={<Chemical />} />
          <Route path="/Auto" element={<Auto />} />
          <Route path="/Care" element={<Care />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Lcl" element={<Lcl />} />
          <Route path="/Air" element={<Air />} />
          <Route path="/House" element={<House />} />
          <Route path="/Sailing" element={<Sailing />} />
          <Route path="/Track" element={<Track />} />
        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
