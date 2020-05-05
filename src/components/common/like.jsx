import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";

  let styles = {
    cursor: "pointer",
  };
  if (liked)
    styles = {
      cursor: "pointer",
      color: "#007bff",
    };

  return (
    <i
      onClick={onClick}
      className={classes}
      style={styles}
      aria-hidden="true"
    />
  );
};

export default Like;
