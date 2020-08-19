import React, { useState, useEffect } from "react";
import "./Feed.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";
import { db } from "../../firebase";

function Feed() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      );
    setLoading(false);
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h3>Home</h3>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {/* posts */}
      {loading && <CircularProgress />}
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          avatar={post.avatar}
          userName={post.userName}
          text={post.text}
          image={post.image}
          verifiyed={post.verifiyed}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}

export default Feed;
