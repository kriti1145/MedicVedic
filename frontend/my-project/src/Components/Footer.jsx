import React from "react";
import logo from "../assets/Images/logo.png";
function Footer() {
  return (
    <>
      <div className="pt-6">
        <hr className="" />
        <footer className="footer max-w-screen-2xl container mx-auto px-4 md:px-20 py-8 text-base-content">
          <aside className=" z-[1] p-2 w-full">
            <img src={logo} alt="" className="w-8 h-8" />
            <a href="/" className="footer-logo text-xl font-bold ">
              MEDICVEDIC
            </a>
            <p className="text-sm text-gray-600">
              Copyright © 2024 developed by KRITI all rights reserved.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <a href="/home" className="link link-hover">
              Home
            </a>
            <a href="/about" className="link link-hover">
              About Us
            </a>
            <a href="/service" className="link link-hover">
              Services
            </a>
            <a href="/blog" className="link link-hover">
              Blog
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">I want to:</h6>
            <a href="/findDoctor" className="link link-hover">
              Find a Doctor
            </a>
            <a href="/appointment" className="link link-hover">
              Request an appointment
            </a>
            <a href="/faq" className="link link-hover">
              Get a opinion
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Support</h6>
            <a href="/terms" className="link link-hover">
              Terms of use
            </a>
            <a href="/privacy" className="link link-hover">
              Privacy policy
            </a>
            <a href="/cookies" className="link link-hover">
              Cookie policy
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
