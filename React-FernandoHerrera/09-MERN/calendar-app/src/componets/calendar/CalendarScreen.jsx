import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import { messages } from '../../helpers/calendar-messages';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';
import { calendarCleanActiveEvent, calendarSetActiveEvent, calendarStartLoading } from '../../actions/calendar';
import AddNewFab from '../ui/AddNewFab';
import DeleteEventFab from '../ui/DeleteEventFab';
import { useEffect } from 'react';

moment.locale('es');

const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calendarStartLoading());
    }, [dispatch]);

    const { events } = useSelector((state) => state.calendar);
    const { user } = useSelector((state) => state.auth);

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: user?.uid === event.user._id ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: '#fff',
        };
        return {
            style,
        };
    };

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    };

    const onSelectEvent = (e) => {
        dispatch(calendarSetActiveEvent(e));
    };

    const onViewChange = (e) => {
        localStorage.setItem('lastView', e);
        setLastView(e);
    };

    const onSelectSlot = (e) => {
        console.log(e);
        dispatch(calendarCleanActiveEvent());
    };

    return (
        <div className="calendar-screen">
            <Navbar />
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccesor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSlot}
                selectable={true}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent,
                }}
            />

            <CalendarModal />

            <DeleteEventFab />
            <AddNewFab />
        </div>
    );
};

export default CalendarScreen;
