import React from "react";
import "./testimonials.css";
import vivian from "../assets/vivian.jpg";
import gbenga from "../assets/gbenga.jpg";
import godwin from "../assets/godwin.jpg";
import adedoyin from "../assets/adedoyin.jpg";
import gabriel from "../assets/gabriel.jpg";
import lois from "../assets/lois.jpg";

function Testimonials() {
  const users = [
    {
      id: 1,
      name: "Vivian Ikpeba",
      company: "ODY Logistics",
      userImage: vivian,
      position: "Head of Operations",
      words:
        "AutoMate has transformed our operations by optimizing routes and reducing fuel consumption, resulting in significant cost savings.",
    },

    // {
    //   id: 2,
    //   name: "Gbenga Ogunmade",
    //   company: "Gbenga Motors",
    //   userImage: gbenga,
    //   position: "CEO",
    //   words:
    //     "With AutoMate real-time vehicle tracking, we are able to monitor our fleet performance and ensure on-time deliveries.",
    // },

    // {
    //   id: 3,
    //   name: "Godwin John",
    //   company: "Bolton White Hotels",
    //   userImage: godwin,
    //   position: "Fleet Manager",
    //   words:
    //     "AutoMate maintenance scheduling feature has helped us streamline our maintenance processes and minimize downtime",
    // },

    // {
    //   id: 4,
    //   name: "Adedoyin Gold",
    //   company: "Motive Cars",
    //   userImage: adedoyin,
    //   position: "Domestic Fleet Coord",
    //   words:
    //     "AutoMate driver safety monitoring has helped us improve driver behavior and reduce the risk of accidents",
    // },

    // {
    //   id: 5,
    //   name: "Gabriel Thompson",
    //   company: "Julius Berger",
    //   userImage: gabriel,
    //   position: "Head of Logistics",
    //   words:
    //     "Thanks to AutoMate customizable reporting, we are able to access detailed fleet analytics and make informed decisions.",
    // },

    // {
    //   id: 6,
    //   name: "Lois Lane",
    //   company: "Transformers Ltd.",
    //   userImage: lois,
    //   position: "CEO",
    //   words:
    //     "The AutoMate automated dispatch system has enabled us to efficiently assign tasks to our drivers and improve overall fleet productivity.",
    // },
  ];

  const reviewCard = users.map((user) => {
    return (
      <div key={user.id} className="individual-container">
       
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
  });

  return (
    <main className="container">
      <div className="title">
        <h2>
          How clients use AutoMate for<br></br> better efficiency.
        </h2>
      </div>

      <section className="review-container">{reviewCard}</section>

      <section className="indicators">
        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>ODY Logistics</p>
        </div>

        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>Gbenga Motors</p>
        </div>

        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>Bolton White Hotels</p>
        </div>

        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>Motive Cars</p>
        </div>

        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/570047/pexels-photo-570047.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>Julius Berger</p>
        </div>

        <div className="indicator-content">
          <img src="https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=800"/>
          <p>Transformers ltd</p>
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
