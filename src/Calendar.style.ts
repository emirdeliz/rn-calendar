import styled from 'styled-components/native';

const DAY_PADDING = 10;

const CALENDAR_WIDTH = 300;

export const Calendar = styled.View`
  width: ${CALENDAR_WIDTH}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Day = styled.TouchableOpacity`
  padding: ${DAY_PADDING}px;
`;