import moment from 'moment';

export const processEventsDates = (events) => {
    const res = events.map((e) => ({ ...e, start: moment(e.start).toDate(), end: moment(e.end).toDate() }));
    return res;
};
