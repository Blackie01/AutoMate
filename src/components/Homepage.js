import React, { useRef, useState } from "react";
import Navigation from "./Nav";
import "./Homepage.css";
import jumboImage from "../assets/jumbo.jpg";
import landline from "../assets/e-landline.png";
import handset from "../assets/e-handset.png";
import Button from "@mui/material/Button";
import driverImage from "../assets/driver.jpg";
import Testimonials from "./testimonials";
import FooterSection from "./footer";
import { Link, NavLink } from "react-router-dom";

function Homepage() {
  // handling the scroll/animation effect of homepage second floor

  const revealFunction = () => {
    // get the reveal class
    let revealClasses = document.querySelectorAll(".reveal");

    // get the position of the elements for each text
    for (let revealElement of revealClasses) {
      const windowHeight = window.innerHeight;
      const textTop = revealElement.getBoundingClientRect().top;
      const textVisible = 150;

      // if/else statement to determine when the element is visible in the screen
      if (textTop < windowHeight - textVisible) {
        revealElement.classList.add("active");
      } else {
        revealElement.classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", revealFunction);

  // for the animation of the telephone in the contact area

  const teleRef = useRef(null);
  const handsetRef = useRef(null);

  const handleMouseEnter = () => {
    if (handsetRef.current) {
      handsetRef.current.classList.add("hoverr");
    }
  };

  const handleMouseLeave = () => {
    if (handsetRef.current) {
      handsetRef.current.classList.remove("hoverr");
    }
  };

  //

  // state management for the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.querySelector(".homepage").style.position = "fixed";
      document.querySelector("#line1").style.transform = "translate(6px, 8px) rotate(45deg)"
      document.querySelector("#line2").style.opacity = "0"
      document.querySelector("#line3").style.transform = "translate(5px, -5px) rotate(-45deg)"
    } else {
      document.querySelector(".homepage").style.position = "unset";
      document.querySelector("#line1").style.transform = "unset"
      document.querySelector("#line2").style.opacity = "unset"
      document.querySelector("#line3").style.transform = "unset"
    }
  };

  //

  return (
    <section className="homepage">
      <Navigation isOpen={isOpen} openMenu={openMenu} />

      {/* hamburger menu */}

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div>Features</div>
        <div>Company</div>
        <div>Solutions</div>
        <div>Case Study</div>

        <section className="mobile-access-menu">

          <Button variant="contained" id="mobile-login-button">Log in</Button>

          <NavLink
            to="/signup"
            style={({ isActive }) =>
              isActive ? { color: "yellow" } : { color: "green" }
            }
          >
            <Button variant="outlined">Sign Up</Button>
          </NavLink>
        </section>
      </div>

      {/* hamburger menu ends here */}

      <div className="fixed-contact-button">
        <Button variant="contained">Contact Us</Button>
      </div>

      <section className="group-1-for-bg-color">
        <section className="hero">
          <section className="hero-text-area">
            <h2 className="jumbo-text">
              Manage your fleet, <br /> like a pro.
            </h2>
            <p>
              The number of vehicles don't matter, AutoMate provides all{" "}
              <br className="breaking-point" /> the tools you need to boost
              productivity.
            </p>

            <section className="jumbo-buttons">
              <Button variant="outlined"><Link className="ss-button"  to='/signup'>Get Started </Link></Button>
              <Button variant="contained">Download App</Button>
            </section>
          </section>

          <section className="hero-image">
            <img className="jumbo-image" src={jumboImage} alt="jumbo-Image" />
          </section>
        </section>
      </section>

      {/* first floor */}

      <section className="hero-first-floor">
        <section className="hero-first-floor-image">
          <section className="--inner">
            <section className="--subInner">
              <img
                className="driver-image"
                src={driverImage}
                alt="driver-Image"
              />

              <section id="pp-buttons" className="jumbo-buttons">
                <Button variant="contained">Get a quote</Button>
                <Button variant="outlined">Learn more</Button>
              </section>
            </section>
          </section>
        </section>

        <section className="hero-first-floor-text">
          <section className="product-title-container">
            <h2 className="product-title">Products & Services</h2>
            <p className="product-title-subtext">
              By trusting us with your fleet management, you enjoy unprecedented
              ease.
              <br />
              You just need to click a button.
            </p>
            <hr id="x-product-hr" className="products-hr" />
          </section>

          <section className="products">
            <h1 className="product-number">01</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Driver safety.</h2>
              <p className="product-listing-text">
                Prevent accidents and exonerate drivers with the most accurate,
                fastest AI dash cam. Reduce insurance costs by improving unsafe
                driving habits through automated coaching.
              </p>
            </section>
          </section>

          <hr className="products-hr" />

          <section className="products">
            <h1 className="product-number">02</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Tracking & telematics.</h2>
              <p className="product-listing-text">
                Real-time visibility into the location, utilization, and health
                of vehicles, equipment, and assets.
              </p>
            </section>
          </section>

          <hr className="products-hr" />

          <section className="products">
            <h1 className="product-number">03</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Maintenance scheduling.</h2>
              <p className="product-listing-text">
                Maximize productivity and reduce costs with preventive fleet
                maintenance. Create thorough inspection records for vehicles and
                assets. Maintain and access all records electronically.
              </p>
            </section>
          </section>

          <hr className="products-hr" />

          <section className="products">
            <h1 className="product-number">04</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Dispatch.</h2>
              <p className="product-listing-text">
                Organize, assign, and optimize for on-time deliveries with
                cloud-based dispatch management. Built on Motive’s high-powered
                tracking solution. Dispatch your fleet with confidence.
              </p>
            </section>
          </section>

          <hr className="products-hr" />

          <section className="products">
            <h1 className="product-number">05</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Fleet sustainability.</h2>
              <p className="product-listing-text">
                Save on fuel and reduce your environmental impact with
                AI-powered insights and fleet fuel management. See your fleet’s
                objective fuel consumption and trends.
              </p>
            </section>
          </section>

          <hr className="products-hr" />

          <section className="products">
            <h1 className="product-number">06</h1>
            <section className="product-listing-container">
              <h2 className="product-listing-title">Dashcams.</h2>
              <p className="product-listing-text">
                When a road event occurs, get the whole picture with the
                smartest dual-facing camera on the market. AutoMate provides the
                tools you need to keep your drivers on top of their game.
              </p>
            </section>
          </section>

          <hr className="products-hr" />
        </section>
      </section>

      {/* second floor */}

      <section className="upcoming-products">
        <div className="upt-container">
          <h2 className="upcoming-products-title">Products launching soon</h2>
        </div>
        <section className="x-second-floor-text">
          <h2 className="slide-text reveal">Advanced Vehicle Telematics.</h2>
          <hr className="upcoming-products-hr" />
          <h2 className="slide-text reveal">Vehicle Optimization Signals.</h2>
          <hr className="upcoming-products-hr" />
          <h2 className="slide-text reveal">Live Simulator.</h2>
          <hr className="upcoming-products-hr" />
          <h2 className="slide-text reveal">Remote Control Access.</h2>
          <hr className="upcoming-products-hr" />
          <h2 className="slide-text reveal">AI Capabilities.</h2>
          <hr className="upcoming-products-hr" />
          <h2 className="slide-text reveal">Remote Vehicle Summon.</h2>
        </section>
      </section>

      {/* numbers don't lie section */}

      <section className="numbers-dont-lie">
        <div className="numbers-title">
          <h2>The numbers don't lie, AutoMate works!</h2>
        </div>

        <section className="content-area">
          <hr class="vertical" />

          <div className="numbers-details">
            <h2>37</h2>
            <p>
              Clients onboarded <br /> in 2 years
            </p>
          </div>

          <hr class="vertical" />

          <div className="numbers-details">
            <h2>
              47 <span className="percent">%</span>{" "}
            </h2>
            <p>
              Average reduction <br /> in accidents
            </p>
          </div>

          <hr class="vertical" />

          <div className="numbers-details">
            <h2>
              30 <span className="percent">%</span>
            </h2>
            <p>
              Decrease in <br /> insurance premiums
            </p>
          </div>

          <hr class="vertical" />

          <div className="numbers-details">
            <h2>
              70 <span className="percent">%</span>
            </h2>
            <p>
              Increase in <br /> operational efficiency
            </p>
          </div>
        </section>
      </section>

      <section className="contact-container">
        <div className="contact-text">
          <h2>Insights into your business needs</h2>
          <p>
            We'll help you see what makes your transport and logistics <br />{" "}
            outfit tick. Get the best out of your human resources, and keep{" "}
            <br /> your vehicles at optimum performance.
          </p>
          <Button className="contact-button-x" variant="contained">
            Get Started
          </Button>
        </div>

        <div
          ref={teleRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          id="telephone-container"
        >
          <div className="sticky-texts">
            <p></p>
          </div>

          <div className="handset">
            <img
              ref={handsetRef}
              id="handset-itself"
              className="handset-img"
              src={handset}
            />
          </div>
          <div className="landline">
            <img src={landline} />
          </div>
        </div>
      </section>

      <Testimonials />

      <FooterSection />
    </section>
  );
}

export default Homepage;
