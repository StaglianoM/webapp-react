
import { NavLink } from 'react-router-dom'

function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/">About</NavLink>

            </li>
            <li>
                <NavLink to="/">Contatti</NavLink>

            </li>
        </ul>
    </nav>
}

export default Nav