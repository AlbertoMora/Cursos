import Swal from 'sweetalert2';
import { processEventsDates } from '../helpers/dates';
import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';

export const calendarAddNewEvent = (event) => ({
    type: types.calendarAddNewEvent,
    payload: event,
});

export const calendarSetActiveEvent = (event) => ({
    type: types.calendarSetActiveEvent,
    payload: event,
});

export const calendarCleanActiveEvent = () => ({
    type: types.calendarCleanActiveEvent,
});

export const calendarStartUpdate = (event) => {
    return async (dispatch) => {
        try {
            const res = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const { ok, msg } = await res.json();

            if (ok) {
                dispatch(calendarUpdateEvent(event));
                Swal.fire('Info', 'Evento actualizado con éxito', 'info');
            } else {
                Swal.fire('Error', msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const calendarUpdateEvent = (event) => ({
    type: types.calendarUpdateEvent,
    payload: event,
});

export const calendarStartDelete = () => {
    return async (dispatch, getState) => {
        const { activeEvent: event } = getState().calendar;
        try {
            const res = await fetchWithToken(`events/${event.id}`, event, 'DELETE');
            const { ok, msg } = await res.json();

            if (ok) {
                dispatch(calendarDeleteEvent());
                Swal.fire('Info', 'Evento eliminado con éxito', 'info');
            } else {
                Swal.fire('Error', msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const calendarDeleteEvent = () => ({
    type: types.calendarDeleteEvent,
});

export const calendarStartAddNew = (event) => {
    return async (dispatch) => {
        try {
            const res = await fetchWithToken('events', event, 'POST');
            const { ok, event: resEvent } = await res.json();
            if (ok) {
                dispatch(calendarAddNewEvent(resEvent));
            }
        } catch (err) {}
    };
};

export const calendarStartLoading = () => {
    return async (dispatch) => {
        try {
            const res = await fetchWithToken('events');
            const { ok, events } = await res.json();
            if (ok) {
                dispatch(eventLoadedAction(processEventsDates(events)));
            }
        } catch (error) {}
    };
};

const eventLoadedAction = (events) => ({
    type: types.calendarEventsLoaded,
    payload: events,
});

export const calendarLogoutAction = () => ({
    type: types.calendarLogout
});