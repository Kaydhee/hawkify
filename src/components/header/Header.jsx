import Collections from '../collections/Collections';
import Currency from '../currencies/Currency';
import Main from '../main/Main';
import Nav from '../nav/Nav';
import './header.css';

function Header() {
	return (
		<header className='header'>
			<Nav />
			<Main />
			<Currency />
			<Collections />
		</header>
	);
}

export default Header;
