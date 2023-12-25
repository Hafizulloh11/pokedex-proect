import { BrowserRouter, Navigate, Route, Routes as BaseRoutes } from 'react-router-dom';

import { Home } from 'pages';

const Routes = () => (
  <BrowserRouter>
    <BaseRoutes>
      <Route path="">
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </BaseRoutes>
  </BrowserRouter>
);

export default Routes;
