import Menu from '../menu/menu';
import './header.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to={`/`} className='logo'>Logo</Link>
            <Menu />
            <div className='logo'>Contact form</div>
        </header>
    )
}
