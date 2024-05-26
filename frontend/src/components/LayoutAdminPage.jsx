import React, { useState, useEffect } from "react";
import Sidebar from "./admin/Sidebar";
import Navigation from "./admin/Navigation";

export default function LayoutAdminPage({
  children,
  setLoading,
  active,
  setActive,
}) {
  const [activeSidebar, setActiveSidebar] = useState(false);
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token"))) {
      window.location.replace("/login");
    }
  }, []);
  return (
    <div>
      <Navigation
        setActiveSidebar={setActiveSidebar}
        activeSidebar={activeSidebar}
      />
      <div className="flex flex-row fixed w-full">
        <Sidebar
          setLoading={setLoading}
          active={active}
          setActive={setActive}
          activeSidebar={activeSidebar}
        />
        <div className="pt-11 flex overflow-y-auto h-screen w-4/5 xl:w-11/12">
          {children}
        </div>
      </div>
    </div>
  );
}
