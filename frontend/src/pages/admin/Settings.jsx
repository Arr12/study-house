import React from "react";
import LayoutAdminPage from "../../components/LayoutAdminPage";

export default function Settings({ setLoading, active, setActive }) {
  return (
    <LayoutAdminPage
      setLoading={setLoading}
      active={active}
      setActive={setActive}
    ></LayoutAdminPage>
  );
}
