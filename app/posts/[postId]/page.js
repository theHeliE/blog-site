import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ReplyIcon from "@mui/icons-material/Reply";
import "./SinglePost.css";
import Comments from "@/app/Components/Comments";
import AddComment from "@/app/Components/AddComment";
import CommentButton from "@/app/Components/CommentButton";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

export default async function SinglePost({ params: { postId } }) {
  const numericPostId = Number(postId);
  const posts = await getData();

  return (
    <div className="post-page">
      {posts ? (
        posts.length > 0 ? (
          (() => {
            let postFound = false;
            const postElements = posts.map((post) => {
              if (post.id === numericPostId) {
                postFound = true;
                return (
                  <div className="post-frame" key={post.id}>
                    <div>
                      <div className="user-icon">
                        <Avatar sx={{ width: "30px", height: "30px" }} />
                        <h5>User{post.userId}</h5>
                      </div>
                      <h3 className="blogpost-title">{post.title}</h3>
                      <p className="post-body">{post.body}</p>
                      <div className="blogpost-options">
                        <div className="reach">
                          <div className="reach-container">
                            <IconButton>
                              <KeyboardDoubleArrowUpIcon />
                            </IconButton>
                            <IconButton>
                              <KeyboardDoubleArrowDownIcon />
                            </IconButton>
                          </div>
                        </div>
                        <div className="reach-container">
                          <CommentButton />
                        </div>
                        <div className="reach-container">
                          <IconButton>
                            <ReplyIcon />
                          </IconButton>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              }
              return null;
            });
            return postFound ? (
              postElements
            ) : (
              <div className="not-found">
                ERR: Post not found 😔
                <Link href={"/"}>Go home</Link>
              </div>
            );
          })()
        ) : (
          <div>No posts found.</div>
        )
      ) : (
        <div>Loading...</div>
      )}
      {posts.map(
        (post) =>
          post.id === numericPostId && (
            <>
              <div className="comments">
                <AddComment />
              </div>
              <div className="comments">
                <Comments postId={postId} />
              </div>
            </>
          )
      )}
    </div>
  );
}
