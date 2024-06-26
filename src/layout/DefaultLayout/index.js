import React, { useEffect, useState } from "react";
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
  const [showz, setShowz] = useState(true);
  const location = useLocation();
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    setShow(!show);
    setOverlayVisible(!isOverlayVisible);
  };

  const contentClass = sidebarOpen ? "content open" : "content";
  const headerClass = sidebarOpen ? "header open" : "header";

  // console.log(showz);

  useEffect(() => {
    if (location.pathname.includes("/song/detail/")) setShowz(true);
    else setShowz(false);
  }, [location.pathname]);

  return (
    <>
      {isOverlayVisible ? <></> : <div className="over_lay"></div>}
      <div className="flex flex-column">
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1000",
            height: "100%",
          }}
        >
          <Sidebar
            onClick={handleViewSidebar}
            isOpen={sidebarOpen}
            toggleSidebar={handleViewSidebar}
            showButton={!show}
          />
        </div>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "999",
          }}
          className={headerClass}
        >
          <Header onClick={handleViewSidebar} showButton={show} />
        </div>
        <div
          className={contentClass}
          style={{
            padding: "8rem 0 2rem 0",
            background:
              "linear-gradient(-240deg,#0e2f1b 0%,#111111 7%,#111111 100% )",
          }}
        >
          {children}
        </div>
        <div>
          <Footer />
        </div>
        {showz ? (
          <></>
        ) : (
          <div style={{ zIndex: "1001" }}>
            <AudioPlay />
          </div>
        )}
      </div>
    </>
  );
}

export default DefaultLayout;
