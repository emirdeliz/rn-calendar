import { memo } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import * as S from './DaysWeek.style';

export const DaysWeek = memo(() => {
  const daysIndex = [0, 1, 2, 3, 4, 5, 6];
  const { dayOfWeekAsString } = useCalendar();
  return (
    <S.DaysWeekContainer>
      {daysIndex.map((day) => {
        const key = day;
        return (
          <S.DayWeek key={key}>
            {dayOfWeekAsString(day)}
          </S.DayWeek>
        );
      })}
    </S.DaysWeekContainer>
  );
});