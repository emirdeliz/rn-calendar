import styled from 'styled-components/native';

export const DAY_SIZE = 40;

const CALENDAR_WIDTH = 300;

export const Calendar = styled.View`
  width: ${CALENDAR_WIDTH}px;
  border: solid 1px #F2F2F2;
  background-color: #FFFFFF;
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

export const Day = styled.Text`
`;