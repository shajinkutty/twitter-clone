import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    padding: "13px",
    fontSize: 25,
    fontWeight: "lighter",
  },
});

function SidebarOptions({ title, Icon, active }) {
  const classes = useStyle();
  return (
    <div>
      <div className={`sidebar__options ${active && "active"}`}>
        <Icon classes={{ root: classes.root }} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default SidebarOptions;
