import { ThemeProps } from '@quicklux/themes';
import { memo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
interface BaseButtonProps {
  variant: keyof ThemeProps['colors'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonProps extends BaseButtonProps {
  text: string;
}

export interface StyledButtonProps extends BaseButtonProps {
  theme: ThemeProps;
}

const StyledButton = styled.button<StyledButtonProps>`
  color: ${(props) => props.theme.colors[props.variant]};
  border: 2px solid ${(props) => props.theme.colors[props.variant]};
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export function Button({ variant, text, onClick }: ButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
export default memo(Button);
