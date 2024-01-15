export const getTimeInHoursMinutes = (timeInSeconds) => {
  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.ceil((timeInSeconds % 3600) / 60);
  const hour = h > 9 ? h : `0${h}`;
  const minute = m > 9 ? m : `0${m}`;
  return `${hour} h ${minute} mi`;
};
