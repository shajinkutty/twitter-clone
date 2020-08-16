import React from "react";
import "./Sidebar.css";

import SidebarOptions from "./SidebarOptions";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreIcon from "@material-ui/icons/More";
import Button from "@material-ui/core/Button";
import Colors from "../const/Colors";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useLogoStyle = makeStyles({
  root: {
    color: Colors.twitter,
    fontSize: 35,
    marginLeft: 20,
    marginBottom: 20,
  },
});
const useButtonStyle = makeStyles({
  root: {
    borderRadius: "25px",
    background: "rgb(29, 161, 242)",
    color: "#fff",
    border: "0",
    marginTop: 20,
    height: 50,
    "&:hover": {
      background: "rgb(29, 161, 241)",
    },
  },
  hover: {
    background: "black",
  },
});

function Sidebar() {
  const logoClasses = useLogoStyle();
  const classes = useButtonStyle();
  return (
    <div className="sidebar">
      <div className="logo">
        <TwitterIcon classes={{ root: logoClasses.root }} />
      </div>
      <SidebarOptions Icon={HomeIcon} title="Home" active={true} />
      <SidebarOptions Icon={DonutLargeIcon} title="Explore" />
      <SidebarOptions Icon={NotificationsNoneIcon} title="Notifications" />
      <SidebarOptions Icon={MailOutlineIcon} title="Messages" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Bookmarks" />
      <SidebarOptions Icon={ListAltIcon} title="Lists" />
      <SidebarOptions Icon={PersonOutlineIcon} title="Profile" />
      <SidebarOptions Icon={MoreIcon} title="More" />
      <div>
        <Button fullWidth classes={{ root: classes.root }}>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
