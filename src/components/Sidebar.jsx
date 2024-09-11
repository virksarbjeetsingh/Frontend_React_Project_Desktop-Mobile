import React from "react";

function Sidebar({ isSidebarVisible }) {
  return (
    <div className={`Sidebar ${isSidebarVisible ? "show-sidebar" : ""}`}>
      <div className="Frame88">
        <img src="./images/VasitumLogo.jpg" alt="Logo" />
      </div>
      <div className="Frame87">
        <div className="Frame85">MAIN MENU</div>

        <div className="Frame1">
          <i className="bi bi-grid-fill dashboard-icon"></i>
          &nbsp;Dashboard
        </div>

        <div className="Frame39">
          <i className="bi bi-person-plus-fill other-icons"></i>
          &nbsp;Recruitment
        </div>

        <div className="Frame3">
          <i className="bi bi-calendar-fill other-icons"></i>
          &nbsp;Schedule
        </div>

        <div className="Frame38">
          <i className="bi bi-people-fill other-icons"></i>
          &nbsp;Employee
        </div>

        <div className="Frame4">
          <i className="bi bi-person-circle other-icons"></i>
          &nbsp;Department
        </div>
      </div>

      <div className="Frame86">
        <div className="Frame84">OTHER</div>

        <div className="Frame5">
          <i className="bi bi-headset other-icons"></i>
          &nbsp;Support
        </div>

        <div className="Frame6">
          <i className="bi bi-gear-fill other-icons"></i>
          &nbsp;Settings
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
