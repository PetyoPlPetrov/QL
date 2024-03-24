import { memo } from 'react';
import styled from 'styled-components';

export const BaseHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.White};
`;

export default memo(BaseHeader);
