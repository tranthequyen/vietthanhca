import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header/screens";
import Partner from "@/modules/Home/screens/Partner";
import Footer from "./footer/screens/Footer";
import AudioPlay from "./AudioPlay/screens/AudioPlay";
import { useLocation } from "react-router-dom";
function DefaultLayout({ children, status }) {
  const [sidebarOpen, setSideBarOpen] = useState(status);
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  const [show, setShow] = useState(true);
  const location = useLocation();
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    setShow(!show);
    setOverlayVisible(!isOverlayVisible);
  };

  const contentClass = sidebarOpen ? "content open" : "content";
  const headerClass = sidebarOpen ? "header open" : "header";

  return (
    <>
      {isOverlayVisible ? <></> : <div className="over_lay"></div>}
      <div className="flex flex-column">
        <Sidebar
          onClick={handleViewSidebar}
          isOpen={sidebarOpen}
          toggleSidebar={handleViewSidebar}
          showButton={!show}
        />
        <div className={headerClass}>
          <Header onClick={handleViewSidebar} showButton={show} />
        </div>
        <div className={contentClass} style={{ padding: "2rem 1rem" }}>
          {children}
        </div>
        {location.pathname === "/" && (
          <div className="pb-3">
            <Partner />
          </div>
        )}
        <div>
          <Footer />
        </div>
        <AudioPlay />
      </div>
    </>
  );
}

export default DefaultLayout;
