import { useCalendar } from "../../hooks/useCalendar";

export const DayWeek = () => { 
  const daysIndex = [0, 1, 2, 3, 4, 5, 6];
  const { dayOfWeekAsString } = useCalendar();
  return (
    <div className="calendar-week-container">
      {daysIndex.map((day) => {
        const key = day;
        return (
          <div key={key} className="calendar-week">
            <span>
              {dayOfWeekAsString(day)}
            </span>
          </div>
        );
      })}
    </div>
  );
}