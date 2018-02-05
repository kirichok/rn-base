import moment from 'moment';
/**
 * Get days by weeks from Month
 * Requires moment
 * */

function getMounth(date) {
    const startWeek = moment(date).startOf('month').week();
    const endWeek = moment(date).endOf('month').week();

    let calendar = [];
    for (let week = startWeek; week < endWeek; week++) {
        calendar.push({
            week: week,
            days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
        })
    }
    return calendar;
}