import React from "react";

export default function Button(props) {
  const {
    id,
    classname,
    color,
    link,
    text,
    onClick,
    displayBlock,
    target
  } = props;

  return (
    <div className={classname}>
      <a
        href={link}
        role="button"
        target={target}
        id={id}
        className={`btn ${color} btn-lg ${displayBlock}`}
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
}
