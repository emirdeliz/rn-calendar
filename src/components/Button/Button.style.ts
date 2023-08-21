import styled from 'styled-components/native';
import { ButtonProps } from './Button';

export const Button = styled.TouchableOpacity<ButtonProps>`
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
`;

export const Label = styled.Text<{ fontWeight?: 'bold' | 'normal' }>`
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`;