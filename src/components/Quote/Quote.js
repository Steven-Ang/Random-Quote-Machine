import React from "react";

export default function Quote(props) {
  const { quote, author } = props;
  return (
    <div>
      <h4 id="text">{quote}</h4>
      <h5 id="author">
        &mdash; <em>{author}</em>
      </h5>
    </div>
  );
}
