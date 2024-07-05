import React from "react";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

/* Social media links */
const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="pt-6">
        <hr className="" />
        <footer className="footer max-w-screen-2xl container mx-auto px-4 md:px-20 py-8 text-base-content ">
          <aside className=" z-[1] p-2 w-full">
            <img src={logo} alt="" className="w-8 h-8" />
            <a href="/home" className="footer-logo text-xl font-bold ">
              MEDICVEDIC
            </a>
            <p className="text-sm text-gray-600">
              Copyright © {year} developed by KRITI all rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-6">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="  w-8 h-8 rounded-full flex items-center justify-center group hover:bg-[#515559] hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
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
          </nav>
          <nav>
            <h6 className="footer-title">I want to:</h6>
            <a href="/findDoctor" className="link link-hover">
              Find a Doctor
            </a>
            <a href="/contact" className="link link-hover">
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
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
