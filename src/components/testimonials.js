import React, { useState } from "react";
import "./testimonials.css";
import vivian from "../assets/vivian.jpg";
import gbenga from "../assets/gbenga.jpg";
import godwin from "../assets/godwin.jpg";
import adedoyin from "../assets/adedoyin.jpg";
import gabriel from "../assets/gabriel.jpg";
import lois from "../assets/lois.jpg";

// object data

const users = [
  {
    id: 1,
    name: "Vivian Ikpeba",
    company: "ODY Logistics",
    logo: "https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: vivian,
    position: "Head of Operations",
    words:
      '"AutoMate has transformed our operations by optimizing routes and reducing fuel consumption, resulting in significant cost savings."',
  },

  {
    id: 2,
    name: "Gbenga Oyedele",
    company: "Gbenga Motors",
    logo: "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: gbenga,
    position: "CEO",
    words:
      '"With AutoMate Real-time Vehicle Tracking, we are able to monitor our fleet performance and ensure on-time deliveries."',
  },

  {
    id: 3,
    name: "Godwin John",
    company: "Bolton White Hotels",
    logo: "https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: godwin,
    position: "Fleet Manager",
    words:
      '"AutoMate Maintenance Scheduling feature has helped us streamline our maintenance processes and minimize downtime"',
  },

  {
    id: 4,
    name: "Adedoyin Gold",
    company: "Motive Cars",
    logo: "https://images.pexels.com/photos/590059/pexels-photo-590059.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: adedoyin,
    position: "Domestic Fleet Coord",
    words:
      '"AutoMate Driver Safety Monitoring system has helped us improve driver behavior and reduce the risk of accidents"',
  },

  {
    id: 5,
    name: "Gabriel Thompson",
    company: "Julius Berger",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: gabriel,
    position: "Head of Logistics",
    words:
      '"Thanks to AutoMate Customizable Reporting, we are able to access detailed fleet analytics and make informed decisions."',
  },

  {
    id: 6,
    name: "Lois Lane",
    company: "Transformers Ltd.",
    logo: "https://images.pexels.com/photos/4480519/pexels-photo-4480519.jpeg?auto=compress&cs=tinysrgb&w=800",
    userImage: lois,
    position: "CEO",
    words:
      '"The AutoMate Automated Dispatch system has enabled us to efficiently assign tasks to our drivers and improve overall fleet productivity."',
  },
];

// show content
function showUserContent(user) {
  return (
    <div id="individual-container">
      <h2 className="company">{user.company}</h2>
      <p className="words">{user.words}</p>

      <div className="user-label">
        <div className="image">
          <img src={user.userImage} />
        </div>

        <div className="user-info">
          <p>{user.name}</p>
          <p>{user.position}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {

  // for the testimonials display
  const [selectedUser, setSelectedUser] = useState(users[0]);

  // function to show current active testimonial

  

  return (
    <main className="container">
      <div className="title">
        <h2>
          How clients use AutoMate for<br></br> better efficiency.
        </h2>

      </div>

      <section className="review-container">
        {selectedUser && showUserContent(selectedUser)}

        <div className="indicators">
          {users.map((user) => (
            <div
              key={user.name}
              onClick={() => setSelectedUser(user)}
              className="indicator-content"
            >
              <div className="clickingImage">
                <img src={user.logo} />
              </div>
              {user.company}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
