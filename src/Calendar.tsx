import { memo, useState } from 'react';
import * as S from './Calendar.style';
import { useCalendar } from './hooks/useCalendar';

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
      {month.forEach(() => { 
        
      })}    
    </S.Calendar>
  );
})