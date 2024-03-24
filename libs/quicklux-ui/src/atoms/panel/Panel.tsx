import { memo } from 'react';
import styled from 'styled-components';

const BasePanel = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 110vh;
  overflow-y: scroll;
  margin: 2rem;
`;
interface PanelProps {
  children: React.ReactNode;
  className?: string;
}
export const Panel = memo(({ className, children }: PanelProps) => {
  return <BasePanel className={className}>{children}</BasePanel>;
});
