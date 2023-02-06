import React from "react";

function Entry(emojis) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emojis.emoji}
        </span>
        <span>{emojis.name}</span>
      </dt>
      <dd>{emojis.meaning}</dd>
    </div>
  );
}
export default Entry;
