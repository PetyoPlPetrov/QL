import styled from 'styled-components';

export const Canvas = styled.div`
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  min-height: 400px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
`;
