import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


function Header() {
    return <header className='navbar'>
        <div className='containerNav'>
            <Link to='/'>
                <img src="/public/vite.svg" alt="" width={35} />
            </Link>
            <Nav />
        </div>
    </header>
}

export default Header;