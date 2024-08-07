import './menu.css'
import { Link, useLocation } from "react-router-dom"
import { menuItems } from './menuItems'
import { useEffect } from 'react';

const useScrollToAnchor = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const anchor = document.querySelector(hash);
            if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
};

export default function Menu() {
    useScrollToAnchor();
    return (
        <ul>
            {menuItems.map((item) =>
            <li key={item.id}>
                <Link to={item.url}>{item.name}</Link>
            </li>)}
        </ul>
    )
}
