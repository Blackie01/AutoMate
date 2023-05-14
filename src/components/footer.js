import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";

function FooterSection() {
  return (
    <footer className="footer-container">
      <section className="footer-container-two">
        <div className="footer-class-one">
          <div className="class-one-left">
            <div className="class-one-logo-container">
              <img className="class-one-logo" src={logo} />
              <p>AutoMate</p>
            </div>
            <div className="class-one-footer-nav">
              <p>About</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Careers</p>
              <p>Help</p>
              <p>Privacy</p>
            </div>
          </div>

          <div className="class-one-right">
            <form>
              <label>Get a Quote</label>

              <div className="input-div">
                <input type="text" placeholder="What do you need?" />
                <button>Message</button>
              </div>
            </form>
          </div>
        </div>

        <hr />

        <div className="resource-disclaimer">
          <p className="disclaimer">
            <strong>Disclaimer: </strong>
            All media resources used for in developing this page are either
            AI-generated or publicly available on Pexels and Google Images.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default FooterSection;
