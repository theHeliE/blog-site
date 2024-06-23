import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import Link from "next/link";
import "./Posts.css";
import Sharebutton from "./Sharebutton";
export default function Postcontainer({ post }) {
  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="user">
            <Avatar sx={{ width: "30px", height: "30px" }} />
            <h5>User{post.userId}</h5>
          </div>
          <Link href={`/posts/${post.id}`}>
            <h3 className="post-title">{post.title}</h3>
          </Link>
          <Link href={`/posts/${post.id}`}>
            <p className="content">{post.body}</p>
          </Link>
        </div>
        <div className="post-options">
          <div className="likes">
            <div className="likes-container">
              <IconButton>
                <KeyboardDoubleArrowUpIcon />
              </IconButton>
              <IconButton>
                <KeyboardDoubleArrowDownIcon />
              </IconButton>
            </div>
          </div>
          <div className="likes-container">
            <div className="comment">
              <Link href={`/posts/${post.id}`}>
                <IconButton>
                  <ModeCommentIcon />
                </IconButton>
              </Link>
            </div>
          </div>
          <Sharebutton post={post} />
        </div>
      </div>
    </>
  );
}
