import { memo, useState } from 'react';
import * as S from './Calendar.style';
import { useCalendar } from './hooks/useCalendar';
import { DaysWeek } from './components';

export interface CalendarProps {
  min?: Date;
  max?: Date;
  value?: Date;
}

export const Calendar = memo(({ min, max, value }: CalendarProps) => { 
  const {
    buildCalendarDay,
    buildMonth,
    dayOfWeekAsString,
    monthsAsString
  } = useCalendar();
  const [calendarDate, setCalendarDate] = useState<Date>(value || new Date());

  const month = buildMonth(calendarDate, { min, max, value });
  return (
    <S.Calendar>
      <DaysWeek />
      {month.forEach((item, index) => { 
        const day = index + 1;
        <S.Day key={day}>{index + 1}</S.Day>
      })}    
    </S.Calendar>
  );
})