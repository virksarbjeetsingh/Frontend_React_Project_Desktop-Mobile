import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const containerRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="Navbar">
        <div className="Frame97" ref={containerRef}>
          <i className="bi bi-list sidebar-menu" onClick={toggleSidebar}></i>

          <input
            type="text"
            placeholder="Search"
            className={`Frame76 ${isInputVisible ? "visible" : ""}`}
          />

          <button
            className={`Frame9 ${isInputVisible ? "hidden" : ""}`}
            onClick={toggleInputVisibility}
          >
            <i className="bi bi-search"></i>
          </button>

          <div className="Frame13">
            <i className="bi bi-bell-fill notification">
              <i className="bi bi-dot Ellipse"></i>
            </i>
            <i className="bi bi-chat-left-dots-fill message"></i>
            <div className="Frame12">
              <img
                src="./images/profile.jpg"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
              <div className="Frame11">
                <span className="profile-name">Admirra John</span>
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle show Frame10"
                  aria-expanded="false"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="custom-hr" />

      <Sidebar isSidebarVisible={isSidebarVisible} />
    </>
  );
}

export default Header;
