import React from "react";
import "./TweetBox.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Colors from "../const/Colors";

const useStyle = makeStyles({
  root: {
    background: Colors.twitter,
    color: "white",
    width: 80,
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    "&:hover": {
      background: Colors.twitter,
    },
  },
});

function TweetBox() {
  const classes = useStyle();
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"></Avatar>
          <input type="text" placeholder="What's happening?" />
        </div>
        <div className="tweetBox__buttons">
          <Button classes={{ root: classes.root }}>Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
