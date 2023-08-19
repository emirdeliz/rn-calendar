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

interface CalendarProps {
  min?: Date;
  max?: Date;
  value?: Date;
}

export const useCalendar = ({ value, min, max }: CalendarProps) => {
  const dayOfWeekAsString = (dayIndex: number) => {
    return [
      DaysOfWeek.MONDAY.substring(0, 3),
      DaysOfWeek.TUESDAY.substring(0, 3),
      DaysOfWeek.WEDNESDAY.substring(0, 3),
      DaysOfWeek.THURSDAY.substring(0, 3),
      DaysOfWeek.FRIDAY.substring(0, 3),
      DaysOfWeek.SATURDAY.substring(0, 3),
      DaysOfWeek.SUNDAY.substring(0, 3),
    ][dayIndex];
  };

  const monthsAsString = (monthIndex: number) => {
    return [
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

  const buildCalendarDay = (currentDate: Date) => {
    const currentDay = currentDate.getDate();
    const isSelected =
      value?.getDate() === currentDay && value?.getMonth() === currentDate.getMonth();
    const isObsolete = currentDate.getMonth() !== value?.getMonth();
    const dateDay = new Date(value?.getFullYear() || 0, value?.getMonth() || 0, currentDay);
    const isDisabledDay =
      (min && dateDay.getTime() < min.getTime()) || (max && dateDay.getTime() > max.getTime());

    return {
      isSelected,
      isObsolete,
      isDisabledDay,
    };
  };

  const createMonth = (selected: Date) => {
    const dateObject = new Date();
    dateObject.setDate(1);
    dateObject.setMonth(selected.getMonth());
    dateObject.setFullYear(selected.getFullYear());

    const lastMonth = new Date();
    lastMonth.setMonth(selected.getMonth());
    lastMonth.setFullYear(selected.getFullYear());
    lastMonth.setDate(0);

    const dayOfWeek = lastMonth.getDay();
    let dayMerge = dayOfWeek;
    let dayDiff = lastMonth.getDate() - dayMerge + 1;

    const calendarDays = [];
    while (dayMerge > 0) {
      lastMonth.setDate(dayDiff);
      calendarDays.push(lastMonth);
      dayMerge -= 1;
      dayDiff += 1;
    }

    dateObject.setDate(dateObject.getDate() + 1);
    while (dateObject.getDate() !== 1) {
      dateObject.setDate(dateObject.getDate() + 1);
    }
  };

  return {
    dayOfWeekAsString,
    monthsAsString,
    buildCalendarDay,
  };
};
