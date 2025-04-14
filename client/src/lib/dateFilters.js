import {
  isAfter,
  isBefore,
  isEqual,
  startOfDay,
  endOfDay,
  parseISO,
} from "date-fns";

export const filterByDateRange = (data, startDate, endDate) => {
  if (!startDate || !endDate || !data) return data;

  const start = startOfDay(startDate);
  const end = endOfDay(endDate);

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, start) || isEqual(itemDate, start)) &&
      (isBefore(itemDate, end) || isEqual(itemDate, end))
    );
  });
};

export const filterByToday = (data) => {
  if (!data) return [];
  const today = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, today) || isEqual(itemDate, today)) &&
      (isBefore(itemDate, todayEnd) || isEqual(itemDate, todayEnd))
    );
  });
};

export const filterByYesterday = (data) => {
  if (!data) return [];
  const yesterday = startOfDay(new Date());
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayEnd = endOfDay(yesterday);

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, yesterday) || isEqual(itemDate, yesterday)) &&
      (isBefore(itemDate, yesterdayEnd) || isEqual(itemDate, yesterdayEnd))
    );
  });
};

export const filterByLast7Days = (data) => {
  if (!data) return [];
  const last7Days = startOfDay(new Date());
  last7Days.setDate(last7Days.getDate() - 7);
  const today = endOfDay(new Date());

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, last7Days) || isEqual(itemDate, last7Days)) &&
      (isBefore(itemDate, today) || isEqual(itemDate, today))
    );
  });
};

export const filterByThisMonth = (data) => {
  if (!data) return [];
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1);
  const firstDay = startOfDay(firstDayOfMonth);
  const today = endOfDay(new Date());

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, firstDay) || isEqual(itemDate, firstDay)) &&
      (isBefore(itemDate, today) || isEqual(itemDate, today))
    );
  });
};

export const filterByThisYear = (data) => {
  if (!data) return [];
  const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
  const firstDay = startOfDay(firstDayOfYear);
  const today = endOfDay(new Date());

  return data.filter((item) => {
    const itemDate = parseISO(item.createdAt);
    return (
      (isAfter(itemDate, firstDay) || isEqual(itemDate, firstDay)) &&
      (isBefore(itemDate, today) || isEqual(itemDate, today))
    );
  });
};
