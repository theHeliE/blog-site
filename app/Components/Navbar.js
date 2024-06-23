"use client";
import React from "react";
import Link from "next/link";
import "./Navbar.css";
import { SiKatana } from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "@mui/material";
import { useContext } from "react";

function NavBar() {
  const { theme, switchDark, switchLight } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <div className="logo">
            <Link href="/">
              <h2 className="title">iBlog - ブログ</h2>
            </Link>
          </div>
          <div className="options">
            <Link href="/create">
              <h2 className="create">
                <FaPlus />
                Create Post
              </h2>
            </Link>
          </div>
          <Button onClick={theme === "light" ? switchDark : switchLight}>
            {theme === "light" ? "☀️" : "🌙"}
          </Button>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
