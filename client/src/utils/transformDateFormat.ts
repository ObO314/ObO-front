export function dateToyymmdd(today: Date) {
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const date = `${year}.${month}.${day}`;
    return date;
}

export function dateTohhmm(today: Date) {
    const hour = today.getHours();
    const minute = today.getMinutes();
    const date = `${hour}:${minute}`;
    return date;
}

export function hourtomilliseconds(hour: number) {
    return hour * 3600000;
}
