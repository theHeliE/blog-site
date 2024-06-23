"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

const scrollToComments = () => {
  const commentsSection = Array.from(document.querySelectorAll("h4")).find(
    (el) => el.textContent === "Comments"
  );

  if (commentsSection) {
    commentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const CommentButton = () => {
  return (
    <div className="comment">
      <IconButton onClick={scrollToComments}>
        <ModeCommentIcon />
      </IconButton>
    </div>
  );
};

export default CommentButton;
