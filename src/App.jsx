import { useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Cars } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { retriveCars } from "./redux/slices/carsSlice";

const App = () => {
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(retriveCars());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
};

export default App;
