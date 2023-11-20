import './nav.css';
import logo from '../../assets/Logo.png';
import balance from '../../assets/balance_icon.png';

import { MdArrowDropDown } from 'react-icons/md';
import Button from '../../common components/button/Button';

function Nav() {
	return (
		<nav className='nav'>
			<div className='nav_container'>
				<div className='logo_box'>
					<img
						src={logo}
						alt='Hawkify logo'
					/>
					<h2>Hawkify</h2>
				</div>

				<input
					type='text'
					placeholder='search collection, address or account'
				/>

				<ul className='nav_items'>
					<li>
						explore <MdArrowDropDown />
					</li>
					<li>
						create <MdArrowDropDown />
					</li>
					<li>
						community <MdArrowDropDown />
					</li>
				</ul>

				<Button className='btn nav_btn'>
					<img
						src={balance}
						alt='icon'
					/>
					connect wallet
				</Button>
			</div>
		</nav>
	);
}

export default Nav;
