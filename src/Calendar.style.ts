import styled from 'styled-components/native';

export const DAY_SIZE = 40;

const CALENDAR_WIDTH = 300;

export const Calendar = styled.View`
  width: ${CALENDAR_WIDTH}px;
  border: solid 1px #f2f2f2;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px;
`;

export const DaysContainer = styled.View`
  flex-flow: row wrap;
`;

export const DayLink = styled.View`
  width: ${DAY_SIZE}px;
  height: ${DAY_SIZE}px;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text``;
