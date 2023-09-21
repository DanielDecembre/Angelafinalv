"use client";
import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  const handleClick = () => {
    // console.log("Clicked");
  };
  return (
    <nav className="relative h-32 w-32">
      <div className="logo">
        <img src="AM.png" alt="Logo" width={"41.792"} height={"40"} />
      </div>
      <div className="absolute top-0 right-0 h-1">
        <Link href="mailto:angelatmcleod@gmail.com" className="contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
