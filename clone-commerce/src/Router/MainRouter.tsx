import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../Components/Organisms/Header';
import GoodsPage from '../Components/Pages/GoodsPage';
import MainPage from '../Components/Pages/MainPage';
import MyPage from '../Components/Pages/MyPage';

const MainRouter = (): JSX.Element => (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<MyPage />} path="/MyPage/*" />
        <Route element={<GoodsPage />} path="/GoodsPage/*" />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
);

export default MainRouter;