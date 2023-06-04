import dayjs from 'dayjs';

export const formatDate = (date: Date, pattern: string): string => dayjs(date).format(pattern);

export const datetimeToHuman = (date: Date): string => formatDate(date, 'D-M-YYYY H:mm');
