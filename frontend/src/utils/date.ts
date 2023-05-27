import dayjs from 'dayjs';

export const formatDate = (date: Date, pattern: string): string => dayjs(date).format(pattern);

export const datetimeToHuman = (date: Date): string => formatDate(date, 'DD-MM-YY HH:mm');
