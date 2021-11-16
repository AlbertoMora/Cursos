import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const AddNewFab = () => {
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch(uiOpenModal());
    };

    return (
        <button onClick={openModal} type="button" className="btn btn-primary fab">
            <i className="fas fa-plus"></i>
        </button>
    );
};

export default AddNewFab;
