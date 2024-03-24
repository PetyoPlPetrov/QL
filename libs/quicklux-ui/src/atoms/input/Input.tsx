import { memo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InputProps {}

const StyledComponents = styled.div`
  color: pink;
`;

export function Input(props: InputProps) {
  return (
    <StyledComponents>
      <h1>Welcome to Components!</h1>
    </StyledComponents>
  );
}

export default memo(Input);
