import './menu.css'
import { Link } from "react-router-dom"
import { menuItems } from './menuItems'

export default function Menu() {
    return (
        <ul>
            {menuItems.map((item) => <Link to={item.url} key={item.id}>{item.name}</Link>)}
        </ul>
    )
}
