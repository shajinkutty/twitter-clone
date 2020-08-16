import React, { useState, useRef } from "react";
import "./Widgets.css";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

const useStyle = makeStyles({
  root: {
    position: "absolute",
    right: 10,
    cursor: "pointer",
  },
});

function Widgets() {
  const classes = useStyle();
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  return (
    <div className="widgets">
      <div className="widgets__header">
        <div className="widgets__input">
          <SearchOutlined></SearchOutlined>
          <input
            type="text"
            placeholder="Search Twitter"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            ref={inputRef}
          />
          {inputText && (
            <CancelIcon
              classes={classes}
              onClick={() => {
                setInputText("");
                inputRef.current.focus();
              }}
            />
          )}
        </div>
      </div>
      <div className="widgets__widgetContainer">
        <h3>What's happening?</h3>
        <TwitterTweetEmbed tweetId="1294503126196563969" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="LetsGoKerala_in"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
