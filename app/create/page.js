"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./create.css";
import AddIcon from "@mui/icons-material/Add";
import ValorantButton from "../Components/ValorantButton";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

export default function Page() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [draftSuccessAlert, setDraftSuccessAlert] = useState(false);
  const theme = useTheme();
  console.log("theme", theme);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) setTitleError("");
  };

  const handleBodyChange = (content) => {
    setBody(content);
    if (content.trim()) setBodyError("");
  };

  useEffect(() => {
    let timer;
    if (showSuccessAlert) {
      timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    } else if (draftSuccessAlert) {
      timer = setTimeout(() => {
        setDraftSuccessAlert(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showSuccessAlert, draftSuccessAlert]);

  const handleCreateClick = () => {
    let error = false;
    setTitleError("");
    setBodyError("");
    setShowSuccessAlert(false);
    const strippedBody = body.replace(/<[^>]*>?/gm, "").trim();
    if (!title.trim()) {
      setTitleError("Please specify a title.");
      error = true;
    }
    if (!strippedBody) {
      setBodyError("Please specify a body.");
      error = true;
    }
    if (!error) {
      setShowSuccessAlert(true);
      setTitle("");
      setBody("");
    }
  };

  const handleDraftClick = () => {
    let error = false;
    setTitleError("");
    setBodyError("");
    setDraftSuccessAlert(false);
    if (!title.trim()) {
      setTitleError("Please specify a title.");
      error = true;
    }
    if (!body.trim()) {
      setBodyError("Please specify a body.");
      error = true;
    }
    if (!error) {
      setDraftSuccessAlert(true);
    }
  };

  const TOOLBAR_OPTIONS = [
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
  ];

  return (
    <div className="create-page">
      <h3 className="create-header">Create a post!</h3>
      <div className="create-interface">
        <div className="create-post">
          {showSuccessAlert ? (
            <Alert severity="success">Post created successfully 🤩</Alert>
          ) : titleError && bodyError ? (
            <Alert severity="error">
              {titleError} {bodyError}
            </Alert>
          ) : bodyError ? (
            <Alert severity="error">{bodyError}</Alert>
          ) : titleError ? (
            <Alert severity="error">{titleError}</Alert>
          ) : null}
          {draftSuccessAlert && (
            <Alert severity="success">Post drafted successfully 😎</Alert>
          )}
          <p>Title</p>
          <div className="write-title">
            <TextField
              id="outlined-basic"
              label="A title can make or break your post!"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
              className="title-input"
              error={!!titleError}
              helperText={titleError}
              sx={{
                width: "100%",
              }}
            />
          </div>
          <p>Body</p>
          <div className="write-body">
            <ReactQuill
              value={body}
              onChange={handleBodyChange}
              modules={{ toolbar: TOOLBAR_OPTIONS }}
            />
            {bodyError && <p className="error">{bodyError}</p>}
          </div>
        </div>
        <div className="create-button">
          <ValorantButton text="Create" onClick={handleCreateClick}>
            <AddIcon />
          </ValorantButton>
          <ValorantButton text="Draft" onClick={handleDraftClick}>
            <AddIcon />
          </ValorantButton>
        </div>
      </div>
    </div>
  );
}
