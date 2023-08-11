import AboutLink from './Link/AboutLink';
import HomeLink from './Link/HomeLink';
import ThemeLink from './Link/ThemeLink';

function Header() {
    return (
        <header>
            <nav className='container'>
                <ul>
                    <li><HomeLink label={'React Feedback UI'}></HomeLink></li>
                </ul>
                <ul>
                    <li><AboutLink /></li>
                    <li><ThemeLink /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;