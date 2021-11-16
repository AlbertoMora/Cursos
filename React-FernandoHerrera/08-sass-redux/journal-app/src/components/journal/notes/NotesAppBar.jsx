import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadingPicture } from "../../../actions/notes";

const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active: currentNote } = useSelector((state) => state.notes);

    const handleSaveNote = () => {
        dispatch(startSaveNote(currentNote));
    };

    const handlePictureUpload = () => {
        document.querySelector("#file-selector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            dispatch(startUploadingPicture(file));
        }
    };

    return (
        <div className="notes__appbar">
            <span>28 de agosto del 2020</span>

            <input onChange={handleFileChange} id="file-selector" name="file" type="file" style={{ display: "none" }} />
            <div>
                <button onClick={handlePictureUpload} className="btn">
                    Picture
                </button>
                <button onClick={handleSaveNote} className="btn">
                    Save
                </button>
            </div>
        </div>
    );
};

export default NotesAppBar;
