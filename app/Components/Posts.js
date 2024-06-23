// pages/posts.js
import React from "react";
import "./Posts.css";
import Postcontainer from "./Postcontainer";
import Skeleton from "@mui/material/Skeleton";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

const PostSkeleton = () => (
  <div className="skeleton">
    <Skeleton className="skeleton-circular" variant="circular" />
    <Skeleton className="skeleton-text" variant="text" />
    <Skeleton className="skeleton-rectangular" variant="rectangular" />
  </div>
);

async function Posts() {
  const posts = await getData();

  return (
    <>
      {posts ? (
        posts.length > 0 ? (
          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="fetch">
                <Postcontainer post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No posts found, please try again.</p>
        )
      ) : (
        Array.from(new Array(5)).map((_, index) => <PostSkeleton key={index} />)
      )}
    </>
  );
}

export default Posts;
