import React from "react";
import { useSelector } from "react-redux";
import JournalEntry from "./JournalEntry";

function JournalEntries() {
    const { notes } = useSelector((state) => state.notes);

    return (
        <div className="journal__entries">
            {notes.map((note) => {
                return <JournalEntry key={note.id} {...note} />;
            })}
        </div>
    );
}

export default JournalEntries;
