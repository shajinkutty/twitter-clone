import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Colors from "../const/Colors";

import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TransformIcon from "@material-ui/icons/Transform";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import moment from "moment";

const useStyle = makeStyles({
  root: {
    fontSize: "medium",
    color: Colors.twitter,
    alignItems: "center",
  },
});

const buttonStyle = makeStyles({
  root: {
    borderRadius: "50%",
    padding: 8,
    color: "#a9a5a5",
    cursor: "pointer",
    fontSize: 20,
    transform: "all .3s",
    "&:hover": {
      background: Colors.background,
      color: Colors.twitter,
    },
  },
});

function Post({
  displayName,
  userName,
  avatar,
  text,
  verifiyed,
  image,
  createdAt,
}) {
  const classes = useStyle();
  const buttonClasses = buttonStyle();
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>{displayName}</h3>
            {verifiyed && <VerifiedUserIcon classes={{ root: classes.root }} />}

            <span>@{userName}</span>
            <span> . {moment(createdAt).startOf("second").fromNow()}</span>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <div className="post__image">
            <img src={image} alt="" />
          </div>
        )}
      </div>

      <div className="post__footer">
        <div className="post__button">
          <ChatBubbleOutlineIcon classes={{ root: buttonClasses.root }} />
          <span>0</span>
        </div>
        <div className="post__button">
          <TransformIcon classes={{ root: buttonClasses.root }} />
          <span>0</span>
        </div>
        <div className="post__button">
          <FavoriteBorderIcon classes={{ root: buttonClasses.root }} />
          <span>0</span>
        </div>
        <div className="post__button">
          <PublishIcon classes={{ root: buttonClasses.root }} />
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Post;
