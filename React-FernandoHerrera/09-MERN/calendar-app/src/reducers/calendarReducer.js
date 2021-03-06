import { types } from '../types/types';

const initialState = {
    events: [],
    activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.calendarAddNewEvent:
            return { ...state, events: [...state.events, action.payload] };
        case types.calendarSetActiveEvent:
            return { ...state, activeEvent: action.payload };
        case types.calendarCleanActiveEvent:
            return { ...state, activeEvent: null };
        case types.calendarUpdateEvent:
            return { ...state, events: state.events.map((e) => (e.id === action.payload.id ? action.payload : e)) };
        case types.calendarDeleteEvent:
            return { ...state, events: state.events.filter((e) => e.id !== state.activeEvent.id), activeEvent: null };
        case types.calendarEventsLoaded:
            return { ...state, events: [...action.payload] };
        case types.calendarLogout:
            return { ...initialState };
        default:
            return state;
    }
};
