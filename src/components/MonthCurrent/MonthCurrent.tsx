import { ReactNode, memo } from 'react';
import { Button } from '../Button/Button';
import { useCalendar } from '../../hooks/useCalendar';
import * as S from './MonthCurrent.style';
import { Text } from 'react-native';

interface MonthCurrentProps {
  calendarDate: Date;
  monthLabel?: Array<ReactNode>;
  updateCalendarDate: (d: Date) => void;
}

export const MonthCurrent = memo(({
  calendarDate,
  monthLabel,
  updateCalendarDate
}: MonthCurrentProps) => { 
  const { monthsAsString } = useCalendar();
  const currentMonth = calendarDate.getMonth();
  const monthName = monthsAsString(currentMonth, monthLabel);

  const updateMonth = (monthIncrement: number) => { 
    const newDate = new Date(calendarDate);
    newDate.setMonth(newDate.getMonth() + monthIncrement);
    updateCalendarDate(newDate);
  }

  const updateYear = (yearIncrement: number) => { 
    const newDate = new Date(calendarDate);
    newDate.setFullYear(newDate.getFullYear() + yearIncrement);
    updateCalendarDate(newDate);
  }

  return (
    <S.MonthCurrent>
      <Button onPress={() => updateYear(-1)}>
        <Text>{"<<"}</Text>
      </Button>
      <Button onPress={() => updateMonth(-1)}>
        <Text>{"<"}</Text>
      </Button>
      <S.MonthYear>{monthName} {String(calendarDate.getFullYear())}</S.MonthYear>
      <Button onPress={() => updateMonth(1)}>
        <Text>{">"}</Text>
      </Button>
      <Button onPress={() => updateYear(1)}>
        <Text>{">>"}</Text>
      </Button>
    </S.MonthCurrent>
  );
})