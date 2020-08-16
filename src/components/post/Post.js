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

function Post({ displayName, userName, avatar, verifiyed }) {
  const classes = useStyle();
  const buttonClasses = buttonStyle();
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c171004/sachin-tendulkar.jpg"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Sachin Tendulkar</h3>

            <VerifiedUserIcon
              classes={{ root: classes.root }}
            ></VerifiedUserIcon>

            <span>@sachin_rt</span>
          </div>
          <div className="post__headerDescription">
            <p>
              Congratulations, Suresh on a wonderful career playing Cricket bat
              and ball for India.Still remember our partnership on-field
              conversations during your debut Test! Wish you all the very best
              for your future endeavours.
            </p>
          </div>
        </div>
        <div className="post__image">
          <img
            src="https://pbs.twimg.com/media/EfeapdSX0AIrYr6?format=jpg&name=small"
            alt=""
          />
        </div>
      </div>

      <div className="post__footer">
        <div className="post__button">
          <ChatBubbleOutlineIcon classes={{ root: buttonClasses.root }} />
          <span>12</span>
        </div>
        <div className="post__button">
          <TransformIcon classes={{ root: buttonClasses.root }} />
          <span>3</span>
        </div>
        <div className="post__button">
          <FavoriteBorderIcon classes={{ root: buttonClasses.root }} />
          <span>4</span>
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
