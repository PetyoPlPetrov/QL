import { useEffect, useState } from 'react';
import styled from 'styled-components';

const BaseHeader = styled.header`
position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  color: #fff; // White text for better contrast
`;

interface HeaderProps {
    title: string;
}

export const Header = ({title}: HeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BaseHeader className={isSticky ? 'sticky' : ''}>
            <h1>{title}</h1>
        </BaseHeader>
    );
};

export default Header;
