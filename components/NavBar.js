import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link href="/">
            <div>
              <Image
                src="/static/images/home.svg"
                alt="home-icon"
                width="25"
                height="25"
              />
              <div style={{ marginLeft: "0.6rem" }}>Home</div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
