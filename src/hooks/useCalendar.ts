import { ReactNode } from 'react';
import { CalendarProps } from '../Calendar';

enum DaysOfWeek {
  SUNDAY = 'Domingo',
  MONDAY = 'Segunda-feira',
  TUESDAY = 'Terça-feira',
  WEDNESDAY = 'Quarta-feira',
  THURSDAY = 'Quinta-feira',
  FRIDAY = 'Sexta-feira',
  SATURDAY = 'Sábado',
}

enum Months {
  JANUARY = 'Janeiro',
  FEBRUARY = 'Fevereiro',
  MARCH = 'Março',
  APRIL = 'Abril',
  MAY = 'Maio',
  JUNE = 'Junho',
  JULY = 'Julho',
  AUGUST = 'Agosto',
  SEPTEMBER = 'Setembro',
  OCTOBER = 'Outubro',
  NOVEMBER = 'Novembro',
  DECEMBER = 'Dezembro',
}

export const useCalendar = () => {
  const dayOfWeekAsString = (dayIndex: number, weekLabel?: Array<ReactNode>) => {
    return weekLabel
      ? weekLabel[dayIndex]
      : [
          DaysOfWeek.MONDAY.substring(0, 3),
          DaysOfWeek.TUESDAY.substring(0, 3),
          DaysOfWeek.WEDNESDAY.substring(0, 3),
          DaysOfWeek.THURSDAY.substring(0, 3),
          DaysOfWeek.FRIDAY.substring(0, 3),
          DaysOfWeek.SATURDAY.substring(0, 3),
          DaysOfWeek.SUNDAY.substring(0, 3),
        ][dayIndex];
  };

  const monthsAsString = (monthIndex: number, monthLabel?: Array<ReactNode>) => {
    return monthLabel
      ? monthLabel[monthIndex]
      : [
          Months.JANUARY,
          Months.FEBRUARY,
          Months.MARCH,
          Months.APRIL,
          Months.MAY,
          Months.JUNE,
          Months.JULY,
          Months.AUGUST,
          Months.SEPTEMBER,
          Months.OCTOBER,
          Months.NOVEMBER,
          Months.DECEMBER,
        ][monthIndex];
  };

  const buildCalendarDay = (
    currentDate: Date,
    isObsolete: boolean,
    { value, min, max }: CalendarProps
  ) => {
    const currentDay = currentDate.getDate();
    const isSelected =
      value?.getDate() === currentDay && value?.getMonth() === currentDate.getMonth();
    const dateDay = new Date(
      currentDate?.getFullYear() || 0,
      currentDate?.getMonth() || 0,
      currentDay
    );
    const isDisabled =
      (min && dateDay.getTime() < min.getTime()) || (max && dateDay.getTime() > max.getTime());

    return {
      isSelected,
      isObsolete,
      isDisabled,
      date: dateDay,
    };
  };

  const buildMonth = (calendarDate: Date, { value, min, max }: CalendarProps) => {
    const currentDate = new Date();
    currentDate.setDate(1);
    currentDate.setMonth(calendarDate.getMonth());
    currentDate.setFullYear(calendarDate.getFullYear());

    const lastMonth = new Date();
    lastMonth.setMonth(calendarDate.getMonth());
    lastMonth.setFullYear(calendarDate.getFullYear());
    lastMonth.setDate(0);

    const dayOfWeek = lastMonth.getDay();
    let dayMerge = dayOfWeek;
    let dayDiff = lastMonth.getDate() - dayMerge + 1;

    const days = [];
    while (dayMerge > 0) {
      lastMonth.setDate(dayDiff);
      days.push(buildCalendarDay(lastMonth, true, { value, min, max }));
      dayMerge -= 1;
      dayDiff += 1;
    }

    days.push(buildCalendarDay(currentDate, false, { value, min, max }));
    currentDate.setDate(currentDate.getDate() + 1);
    while (currentDate.getDate() !== 1) {
      days.push(buildCalendarDay(currentDate, false, { value, min, max }));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  return {
    dayOfWeekAsString,
    monthsAsString,
    buildCalendarDay,
    buildMonth,
  };
};
