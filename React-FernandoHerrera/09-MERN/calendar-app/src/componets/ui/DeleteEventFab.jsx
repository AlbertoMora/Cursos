import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calendarStartDelete } from '../../actions/calendar';

const DeleteEventFab = () => {
    const { activeEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(calendarStartDelete());
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            className={`btn btn-danger fab-danger ${!activeEvent && 'no-show'}`}>
            <i className="fas fa-trash"></i>
        </button>
    );
};

export default DeleteEventFab;
