import { ReactNode, memo } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import * as S from './DaysWeek.style';

interface DaysWeekProps {
  weekLabel?: Array<ReactNode>;
}

export const DaysWeek = memo(({ weekLabel }: DaysWeekProps) => {
  const daysIndex = [0, 1, 2, 3, 4, 5, 6];
  const { dayOfWeekAsString } = useCalendar();
  return (
    <S.DaysWeekContainer>
      {daysIndex.map((day) => {
        const key = day;
        return (
          <S.DayWeekContainer key={key}>
            <S.DayWeek>{dayOfWeekAsString(day, weekLabel)}</S.DayWeek>
          </S.DayWeekContainer>
        );
      })}
    </S.DaysWeekContainer>
  );
});
