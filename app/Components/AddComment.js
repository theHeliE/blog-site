"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./Comments.css";
import { Alert } from "@mui/material";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState(false);
  const handleCommentChange = (value) => {
    setComment(value);
    if (value.trim()) {
      setCommentError("");
      setError(false);
    }
  };
  const TOOLBAR_OPTIONS = [
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
  ];

  const handleCreateClick = () => {
    setCommentError("");
    setShowSuccessAlert(false);
    const strippedComment = comment.replace(/<[^>]*>?/gm, "").trim();
    if (!strippedComment) {
      setCommentError("A comment can not be blank.");
      setError(true);
      return;
    }
    setShowSuccessAlert(true);
    setComment("");
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateClick();
  };
  useEffect(() => {
    let timer;
    if (showSuccessAlert) {
      timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessAlert]);

  const removeComment = () => {
    setComment("");
  };

  return (
    <form className="add-comment" onSubmit={handleSubmit}>
      <ReactQuill
        value={comment}
        onChange={handleCommentChange}
        modules={{ toolbar: TOOLBAR_OPTIONS }}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }} className="submit-icons">
        <IconButton aria-label="delete" size="large" onClick={removeComment}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large" type="submit">
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </div>
      {commentError && <p className="comment-error">{commentError}</p>}
      {showSuccessAlert && <Alert severity="success"> Comment Added! 🥳</Alert>}
    </form>
  );
};

export default AddComment;
