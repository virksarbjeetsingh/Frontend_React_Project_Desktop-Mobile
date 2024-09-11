import React from "react";
import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="content">
      <Header />
      <div className="title">Dashboard</div>
      <div className="Available-position">
        <div className="">
          <h5 className="Available-position-text">Available Position</h5>
          <h6 className="mb-2 text-body-secondary Available-count">24</h6>
          <p className="paragraph1">4 Urgently needed</p>
        </div>
      </div>
      <div className="Job-Open">
        <div className="">
          <h5 className="Job-Open-text">Job Open</h5>
          <h6 className="mb-2 text-body-secondary Job-count">10</h6>
          <p className="paragraph2">4 Active hiring</p>
        </div>
      </div>
      <div className="New-Employees">
        <div className="">
          <h5 className="New-Employees-text">New Employees</h5>
          <h6 className="mb-2 text-body-secondary Employees-count">24</h6>
          <p className="paragraph3">4 Department</p>
        </div>
      </div>
      <div className="Total-Employees">
        <div className="Frame50">
          <div className="Frame49">
            <h5 className="total-employees-text">Total Employees</h5>
            <h6 className="total-employees-count">216</h6>
          </div>
          <div className="Frame48">
            <p className="E-Men-count">120 Men</p>
            <p className="E-Women-count">96 Women</p>
          </div>
        </div>
        <div className="Frame52">
          <img src="./images/graph1.jpg" className="graph1" />
          <div className="Frame51">
            <p className="Frame51-percent">+2% Past month</p>
          </div>
        </div>
      </div>

      <div className="Talent-Request">
        <div className="Frame50">
          <div className="Frame49">
            <h5 className="total-employees-text">Talent Request</h5>
            <h6 className="total-employees-count">16</h6>
          </div>
          <div className="Frame48">
            <p className="E-Men-count">6 Men</p>
            <p className="E-Women-count">10 Women</p>
          </div>
        </div>
        <div className="Frame52">
          <img src="./images/graph2.jpg" className="graph1" />
          <div className="Frame51">
            <p className="Frame51-percent">+5% Past month</p>
          </div>
        </div>
      </div>

      <div className="recently-activity">
        <div className="Frame82">
          <h4>Recently Activity</h4>
        </div>
        <div className="Frame81">
          <p className="activity-time">10:40 AM, Fri 10 Sept 2021</p>
          <p className="activity-details">You Posted a New Job</p>
          <p className="activity-description">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>
        <div className="Frame80">
          <p className="activity-count">Today you makes 12 Activity</p>
          <button className="see-all-activity">
            <p className="primary-button">See All Activity</p>
          </button>
        </div>
      </div>

      <div className="Announcement">
        <div className="Frame72">
          <p className="Announcement-button">See All Announcement</p>
        </div>
        <div className="Frame74">
          <p className="Announcement-title">Announcement</p>
          <div className="Frame64">
            <div className="Frame63">
              <p className="Announcement-title-time">Today, 13 sep 2021</p>
            </div>
            <div className="Dashboard-Frame10">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle show DashboardFrame10toggle"
                aria-expanded="false"
              ></a>
            </div>
          </div>
        </div>
        <div className="Frame62">
          <div className="Frame58">
            <p className="Announcement-Heading">
              IT Department need two more talents for UX/UI Designer position
            </p>
            <p className="Announcement-paragraph">Yesterday, 09:15 AM</p>
          </div>
          <div className="Frame57">
            <i className="bi bi-pin-angle-fill Heading-Pin"></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <div className="Frame61">
          <div className="Frame58">
            <p className="Announcement-Heading">Meeting HR Department</p>
            <p className="Announcement-paragraph">Yesterday, 12:30 PM</p>
          </div>
          <div className="Frame57">
            <i className="bi bi-pin-angle-fill Heading-Pin"></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <div className="Frame60">
          <div className="Frame58">
            <p className="Announcement-Heading">
              Outing schedule for every department
            </p>
            <p className="Announcement-paragraph">5 Minutes ago</p>
          </div>
          <div className="Frame57">
            <i className="bi bi-pin-angle-fill FirstHeading-Pin"></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
      </div>

      <div className="Upcoming-Schedule">
        <div className="Frame73">
          <p className="Upcoming-button">Create a New Schedule</p>
        </div>
        <div className="Frame75">
          <p className="Upcoming-title">Upcoming Schedule</p>
          <div className="Frame65">
            <div className="Frame63">
              <p className="Announcement-title-time">Today, 13 sep 2021</p>
            </div>
            <div className="Announcement-Frame10">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle show AnnouncementFrame10toggle"
                aria-expanded="false"
              ></a>
            </div>
          </div>
        </div>
        <div className="Frame71">
          <div className="Frame66">
            <p className="Upcoming-Heading">Additional Data</p>
            <p className="Upcoming-paragraph">Today- 09:15 AM</p>
          </div>
          <div className="Frame57">
            <i
              className="bi bi-pin-angle-fill Heading-Pin"
              style={{ opacity: 0 }}
            ></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <div className="Frame70">
          <div className="Frame66">
            <p className="Upcoming-Heading">
              Short meeting with product designer from IT Department
            </p>
            <p className="Upcoming-paragraph">Today- 09:15 AM</p>
          </div>
          <div className="Frame57">
            <i
              className="bi bi-pin-angle-fill Heading-Pin"
              style={{ opacity: 0 }}
            ></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <div className="Frame69">
          <div className="Frame66">
            <p className="Upcoming-Heading">Interview with candidates</p>
            <p className="Upcoming-paragraph">Today- 10:30 AM</p>
          </div>
          <div className="Frame57">
            <i
              className="bi bi-pin-angle-fill Heading-Pin"
              style={{ opacity: 0 }}
            ></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <div className="Frame68">
          <div className="Frame66">
            <p className="Upcoming-Heading">Review Candidate Applications</p>
            <p className="Upcoming-paragraph">Today- 11:30AM</p>
          </div>
          <div className="Frame57">
            <i className="bi bi-pin-angle-fill " style={{ opacity: 0 }}></i>
            <i className="bi bi-three-dots Dots"></i>
          </div>
        </div>
        <p className="Priority">Priority</p>
        <p className="Others">Others</p>
      </div>
    </div>
  );
}

export default Dashboard;
