import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LayoutHomePage({ children, setLoading, active, setActive }) {
  return (
    <>
      <Header setLoading={setLoading} active={active} setActive={setActive} />
      {children}
      <Footer />
    </>
  );
}

export default LayoutHomePage;
