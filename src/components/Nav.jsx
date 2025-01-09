
import { NavLink } from 'react-router-dom'

function Nav() {
    return <nav>
        <ul className='infoNav'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contatti</NavLink>

            </li>
        </ul>
    </nav>
}

export default Nav