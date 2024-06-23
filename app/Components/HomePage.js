"use client";
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import LoadingScreen from "./LoadingScreen";
import "./Posts.css";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <LoadingScreen />
      </div>
    );
  }
  return (
    <>
      <Posts />
    </>
  );
}
