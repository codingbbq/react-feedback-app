import { NavLink } from 'react-router-dom';

function HomeLink({label}) {
    return (
        <>
            <NavLink to='/'>{label}</NavLink>
        </>
    )
}

export default HomeLink;