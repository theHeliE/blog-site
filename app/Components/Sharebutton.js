"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";
import { Alert } from "@mui/material";

export default function Sharebutton({ post }) {
  const [showAlert, setShowAlert] = useState(false);
  function copyLink() {
    var copyText = window.location.origin + `/posts/${post.id}`;

    navigator.clipboard.writeText(copyText);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="likes-container">
        <IconButton onClick={copyLink}>
          <ReplyIcon />
        </IconButton>
      </div>

      {showAlert && (
        <Alert
          severity="success"
          sx={{ width: "170px", padding: "5px 4px 5px 4px" }}
        >
          Copied to clipboard!
        </Alert>
      )}
    </div>
  );
}
