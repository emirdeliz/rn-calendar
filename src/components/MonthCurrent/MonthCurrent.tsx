import { ReactNode, memo } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from '../Button/Button';
import { useCalendar } from '../../hooks/useCalendar';
import * as S from './MonthCurrent.style';

interface MonthCurrentProps {
  calendarDate: Date;
  monthLabel?: Array<ReactNode>;
  updateCalendarDate: (d: Date) => void;
}

export const MonthCurrent = memo(
  ({ calendarDate, monthLabel, updateCalendarDate }: MonthCurrentProps) => {
    const { monthsAsString } = useCalendar();
    const currentMonth = calendarDate.getMonth();
    const monthName = monthsAsString(currentMonth, monthLabel);

    const updateMonth = (monthIncrement: number) => {
      const newDate = new Date(calendarDate);
      newDate.setMonth(newDate.getMonth() + monthIncrement);
      updateCalendarDate(newDate);
    };

    const updateYear = (yearIncrement: number) => {
      const newDate = new Date(calendarDate);
      newDate.setFullYear(newDate.getFullYear() + yearIncrement);
      updateCalendarDate(newDate);
    };

    return (
      <S.MonthCurrent>
        <Button onPress={() => updateYear(-1)}>
          <FontAwesome5 name="angle-double-left" size={20} color="black" />
        </Button>
        <Button onPress={() => updateMonth(-1)}>
          <FontAwesome5 name="angle-left" size={20} color="black" />
        </Button>
        <S.MonthYear>
          {monthName} {String(calendarDate.getFullYear())}
        </S.MonthYear>
        <Button onPress={() => updateMonth(1)}>
          <FontAwesome5 name="angle-right" size={20} color="black" />
        </Button>
        <Button onPress={() => updateYear(1)}>
          <FontAwesome5 name="angle-double-right" size={20} color="black" />
        </Button>
      </S.MonthCurrent>
    );
  }
);
