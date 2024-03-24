import { useEffect, useState } from 'react';
import { BaseHeader } from '../../atoms';

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
