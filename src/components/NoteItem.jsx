import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

const NoteItem = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
}) => (
  <div className="note-item">
    <NoteItemContent title={title} createdAt={createdAt} body={body} />

    <NoteItemAction
      id={id}
      archived={archived}
      onDelete={onDelete}
      onArchive={onArchive}
    />
  </div>
);

export default NoteItem;
