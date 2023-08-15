import AboutLink from './Link/AboutLink';
import HomeLink from './Link/HomeLink';

function Header() {
    return (
        <header>
            <nav className='container'>
                <ul>
                    <li><HomeLink label={'React Feedback UI'}></HomeLink></li>
                </ul>
                <ul>
                    <li><AboutLink /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;