import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { Home } from './page/home';

import "./App.scss"
import { lazy, useEffect } from 'react';
import { getAllMedicines } from './redux/medicine/medecineOperation';
import { useDispatch } from 'react-redux';

const ShopingCard = lazy(() => import("./page/shoping-card"));

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllMedicines())
  })

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shoping" element={<ShopingCard />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
