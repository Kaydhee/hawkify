import Collections from '../collections/Collections';
import Currency from '../currencies/Currency';
import Explore from '../explore/Explore';
import Main from '../main/Main';
import Mints from '../mints/Mints';
import Nav from '../nav/Nav';
import './header.css';

function Header() {
	return (
		<header className='header'>
			<Nav />
			<Main />
			<Currency />
			<Collections />
			<Mints />
			<Explore />
		</header>
	);
}

export default Header;
