import Collections from '../collections/Collections';
import Currency from '../currencies/Currency';
import Explore from '../explore/Explore';
import Footer from '../footer/Footer';
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
			<Footer />
		</header>
	);
}

export default Header;
