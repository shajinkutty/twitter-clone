import React, { useState, useRef, useEffect } from "react";
import "./TweetBox.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Colors from "../const/Colors";

import { storage, db } from "../../firebase";

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
    "&:disabled": {
      background: Colors.background,
    },
  },
});

const useIconStyle = makeStyles({
  root: {
    color: Colors.twitter,
    margin: 5,
    borderRadius: "50%",
    padding: 7,
    fontSize: 25,
    cursor: "pointer",
    "&:hover": {
      background: Colors.background,
    },
  },
});

function TweetBox() {
  const classes = useStyle();
  const iconClasses = useIconStyle();

  const [loading, setLoading] = useState(false);
  const [tweetText, setTweetText] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const inputFileRef = useRef(null);

  useEffect(() => {
    if (image) setUrl(URL.createObjectURL(image));
  }, [image]);

  const tweetHandler = () => {
    setLoading(true);
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snap) => {},
        (err) => {},
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              const newTweet = {
                avatar: "https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg",
                displayName: "Shajin Kuttappan",
                image: url,
                text: tweetText,
                userName: "shajink4u",
                verifiyed: true,
                createdAt: new Date().toISOString(),
              };
              db.collection("posts")
                .add(newTweet)
                .then(() => {
                  setImage(null);
                  setTweetText("");
                  setLoading(false);
                })
                .catch((err) => {
                  setLoading(false);
                });
            });
        }
      );
    } else {
      const newTweet = {
        avatar: "https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg",
        displayName: "Shajin Kuttappan",
        image: null,
        text: tweetText,
        userName: "shajink4u",
        verifiyed: true,
        createdAt: new Date().toISOString(),
      };
      db.collection("posts")
        .add(newTweet)
        .then(() => {
          setImage(null);
          setTweetText("");
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  return (
    <div className="tweetBox">
      {loading && (
        <div className="progress">
          <CircularProgress />
        </div>
      )}

      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg"></Avatar>
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
        </div>
        {image && (
          <>
            <div className="tweetBox__imagePreview">
              <img src={url} alt="" />
            </div>
            <div className="close__button">
              <HighlightOffIcon onClick={() => setImage(null)} />
            </div>
          </>
        )}

        <div className="tweetBox__buttons">
          <div className="tweetBox__icons">
            <input
              type="file"
              ref={inputFileRef}
              className="file__upload"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <ImageIcon
              classes={iconClasses}
              onClick={() => inputFileRef.current.click()}
            ></ImageIcon>
            <GifIcon classes={iconClasses}></GifIcon>
            <InsertEmoticonIcon classes={iconClasses}></InsertEmoticonIcon>
          </div>
          <Button
            classes={{ root: classes.root }}
            disabled={!tweetText ? true : false}
            onClick={tweetHandler}
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
