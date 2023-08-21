import styled from 'styled-components/native';
import { DAY_SIZE } from '../../Calendar.style';

export const DaysWeekContainer = styled.View`
  flex-direction: row;
`;

export const DayWeekContainer = styled.View`
  width: ${DAY_SIZE}px;
  height: ${DAY_SIZE}px;
  align-items: center;
  justify-content: center;
`;

export const DayWeek = styled.Text`
  font-weight: 800;
`;
