import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote, startDeleteNote } from "../../../actions/notes";
import { useForm } from "../../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    const { active: note } = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body, id } = formValues;

    const activeId = useRef(note.id);

    const handleDelete = () => {
        dispatch(startDeleteNote(id));
    }

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(setActiveNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    return (
        <div className="notes animate__animated animate__fadeIn animate__faster">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />
                <textarea
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                    placeholder="What happen' today"
                    className="notes__textarea"></textarea>
                {note.url && (
                    <div className="notes__image">
                        <img src={note.url} alt="img note" />
                    </div>
                )}
            </div>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
        </div>
    );
};

export default NoteScreen;
