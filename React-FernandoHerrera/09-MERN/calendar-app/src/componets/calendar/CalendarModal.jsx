import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { calendarCleanActiveEvent, calendarStartAddNew, calendarStartUpdate } from '../../actions/calendar';
import { useEffect } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const now = moment().minutes(0).seconds(0).add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: now.clone().add(1, 'hours').toDate(),
};

Modal.setAppElement('#root');

const CalendarModal = () => {
    const [formValues, setFormValues] = useState(initEvent);

    const [titleValid, setTitleValid] = useState(true);
    const { notes, title, start: startDate, end: endDate } = formValues;

    const { modalOpen } = useSelector((state) => state.ui);
    const { activeEvent } = useSelector((state) => state.calendar);
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent);
        } else {
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues]);

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(calendarCleanActiveEvent());
        setFormValues(initEvent);
    };

    const handleStartDateChange = (e) => {
        setFormValues({
            ...formValues,
            start: e,
        });
    };

    const handleEndDateChange = (e) => {
        setFormValues({
            ...formValues,
            end: e,
        });
    };

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(startDate);
        const momentEnd = moment(endDate);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('Error', 'Fecha fin debe ser mayor a Fecha Inicio', 'error');
            return;
        }

        if (title.trim().length <= 0) {
            setTitleValid(false);
        }
        setTitleValid(true);
        closeModal();

        if (activeEvent) {
            dispatch(calendarStartUpdate(formValues));
        } else {
            dispatch(calendarStartAddNew(formValues));
        }
    };

    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo">
            <h1> {activeEvent ? 'Editar' : 'Nuevo'} Evento</h1>
            <hr />
            <form noValidate className="container" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker className="form-control" onChange={handleStartDateChange} value={startDate} />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        minDate={startDate}
                        onChange={handleEndDateChange}
                        value={endDate}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        onChange={handleInputChange}
                        value={title}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Una descripción corta
                    </small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        onChange={handleInputChange}
                        value={notes}
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"></textarea>
                    <small id="emailHelp" className="form-text text-muted">
                        Información adicional
                    </small>
                </div>

                <button type="submit" className="btn btn-outline-primary btn-block">
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    );
};

export default CalendarModal;
