import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "./notes/NoteScreen";
import EmptyField from "./EmptyField";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
    const { active } = useSelector((state) => state.notes);
    return (
        <div className="journal animate__animated animate__fadeIn animate__faster">
            <Sidebar />
            <main>{active ? <NoteScreen /> : <EmptyField />}</main>
        </div>
    );
};

export default JournalScreen;
