import { db } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(setActiveNote(docRef.id, newNote));
        dispatch(addNewNote(docRef.id, newNote));
    };
};

export const setActiveNote = (id, note) => ({
    type: types.notesActive,
    payload: { id, ...note },
});

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        console.log(noteToFirestore);

        dispatch(refreshUpdatedNote(note.id, noteToFirestore));

        Swal.fire("Saved", note.title, "success");
    };
};

export const refreshUpdatedNote = (noteId, note) => ({
    type: types.notesUpdated,
    payload: { note, noteId },
});

export const startUploadingPicture = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({
            title: "Uploading...",
            text: "Please Wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
    };
};

export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        Swal.fire({
            title: "Deleting...",
            text: "Please Wait...",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        Swal.close();
        dispatch(deleteNote(id));
        Swal.fire("Successfully Deleted", "The note has been deleted sucessfully", "success");
    };
};

export const deleteNote = (noteId) => ({
    type: types.notesDelete,
    payload: noteId,
});

export const cleanNotesLogout = () => ({
    type: types.notesLogoutCleaning
});