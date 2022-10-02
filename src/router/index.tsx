import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/home/home.page';
import { RoutePath } from '@/router/paths';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={RoutePath.home} element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
