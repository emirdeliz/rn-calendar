import { ReactNode, memo } from 'react';
import * as S from './Button.style';

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onPress?: () => void;
}

const ButtonBase = memo(({ children, disabled, onPress }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onPress={onPress}>
      {children}
    </S.Button>
  );
});

export const Button = (props: ButtonProps) => <ButtonBase {...props} />;
Button.Text = ({
  children,
  fontWeight,
  ...props
}: ButtonProps & { fontWeight?: 'bold' | 'normal' }) => (
  <ButtonBase {...props}>
    <S.Label fontWeight={fontWeight}>{children}</S.Label>
  </ButtonBase>
);
