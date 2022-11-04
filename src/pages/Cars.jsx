import { Header, Hero, Footer, Filter, Cards } from "../components";
// import { useDispatch } from "react-redux";
// import { useEffect, useCallback } from "react";
// import { retriveCars } from "../redux/slices/carsSlice";

const Cars = () => {
  // const dispatch = useDispatch();

  // const initFetch = useCallback(() => {
  //   dispatch(retriveCars());
  // }, [dispatch]);

  // useEffect(() => {
  //   initFetch();
  // }, [initFetch]);

  return (
    <>
      <Header />
      <Hero />
      <Filter />
      <Cards />
      <Footer />
    </>
  );
};

export default Cars;
