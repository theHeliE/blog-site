import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./Comments.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  return comments;
};

export default async function Comments({ postId }) {
  const comments = await getData();
  const numericPostId = Number(postId);
  return (
    <div>
      <h4>Comments</h4>
      {comments ? (
        comments.length > 0 ? (
          comments.map((comment) =>
            comment.postId === numericPostId ? (
              <div className="comment-frame" key={comment.postId}>
                <div>
                  <div className="user-icon">
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                    <div>
                      <h5 className="comment-name">{comment.name}</h5>
                      <h6 className="comment-email">{comment.email}</h6>
                    </div>
                  </div>

                  <p className="comment-body">{comment.body}</p>
                  <div className="comment-options">
                    <div className="comment-reach">
                      <div className="comment-reach-container">
                        <IconButton>
                          <KeyboardDoubleArrowUpIcon
                            sx={{ width: "20px", height: "20px" }}
                          />
                        </IconButton>
                        <IconButton>
                          <KeyboardDoubleArrowDownIcon
                            sx={{ width: "20px", height: "20px" }}
                          />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )
        ) : (
          <div>No posts found.</div>
        )
      ) : (
        <div>Loading...</div>
      )}
      <div className="comments"></div>
    </div>
  );
}
