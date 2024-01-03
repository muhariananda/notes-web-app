import React from "react";
import { showFormattedDate } from "../utils";

const NoteItemContent = ({ title, createdAt, body }) => {
  const formatedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{formatedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

export default NoteItemContent;
