import React, { useState } from "react"

import classes from "./Post.module.css"

export default function Post(props) {

  const { id, title, body } = props.data;
  return (
    <div>
      <div className={classes.post}>
        <small>{id}</small>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}