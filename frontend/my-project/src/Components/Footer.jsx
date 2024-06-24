import React from "react";
import logo from "../assets/Images/logo.png";
function Footer() {
  return (
    <>
      <div>
        <hr className="mt-20" />
        <footer className="footer p-10  text-base-content">
          <aside className=" z-[1] p-2 w-full">
            <img src={logo} alt="" className="w-8 h-8" />
            <a className="footer-logo text-xl font-bold ">MEDICVEDIC</a>
            <p>Copyright © 2024 developed by KRITI all rights reserved.</p>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Blog</a>
          </nav>
          <nav>
            <h6 className="footer-title">I want to:</h6>
            <a className="link link-hover">Find a Doctor</a>
            <a className="link link-hover">Request an appointment</a>
            <a className="link link-hover">Get a opinion</a>
          </nav>
          <nav>
            <h6 className="footer-title">Support</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
