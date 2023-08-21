import { ReactNode, memo, useState } from 'react';
import { useCalendar } from './hooks/useCalendar';
import { DaysWeek, Button, MonthCurrent } from './components';
import * as S from './Calendar.style';

export interface CalendarProps {
  min?: Date;
  max?: Date;
  value?: Date;
  monthLabel?: Array<ReactNode>;
  weekLabel?: Array<ReactNode>;
  onChange?: (d: Date) => void;
}

export const Calendar = memo(({
  min,
  max,
  value,
  monthLabel,
  weekLabel,
  onChange
}: CalendarProps) => { 
  const { buildMonth } = useCalendar();
  const [calendarDate, setCalendarDate] = useState<Date>(value || new Date());
  const month = buildMonth(calendarDate, { min, max, value });

  return (
    <S.Calendar>
      <MonthCurrent
        monthLabel={monthLabel}
        calendarDate={calendarDate}
        updateCalendarDate={(d) => setCalendarDate(d)}
      />
      <DaysWeek weekLabel={weekLabel} />
      <S.DaysContainer>
        {month.map((item, index ) => { 
          const { date, isDisabled, isObsolete, isSelected } = item;
          const day = date.getDate();
          return (
            <S.DayLink key={index}>
              <Button.Text
                disabled={isDisabled || isObsolete}
                fontWeight={isSelected ? 'bold' : 'normal'}
                onPress={() => onChange && onChange(date)}
              >
                {day}
              </Button.Text>
            </S.DayLink>
          );
        })}
      </S.DaysContainer>
    </S.Calendar>
  );
})