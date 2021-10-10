import React, { useEffect, useCallback } from "react";
import PostItem from "./PostItem";
import "../css/PostList.css";
import axios from "axios";
const PostList = () => {
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: "get",
        url: "/api/v1/posts",
      };
      const response = await axios(option);
      const posts = response.data.data.posts;
      console.log(posts);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return (
    <section className="post-section">
      <div className="post-list">
        <div className="post-item">
          <PostItem />
        </div>
      </div>
    </section>
  );
};

export default PostList;
