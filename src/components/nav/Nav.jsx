import './nav.css';
import logo from '../../assets/Logo.png';
import balance from '../../assets/balance_icon.png';

import { IoMdSearch } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import Button from '../../common components/button/Button';
import { useState } from 'react';

function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	function handleShowMenu() {
		setShowMenu(!showMenu);
		setIsExpanded(!isExpanded);
	}

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

				<div className='nav_contents'>
					<input
						type='text'
						placeholder='search collection, address or account'
					/>
					<IoMdSearch className='nav_icon search' />

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
				</div>

				<div className='nav_btns'>
					<Button className='btn nav_btn'>
						<img
							src={balance}
							alt='icon'
						/>
						<span>connect wallet</span>
					</Button>

					<button
						className='toggle_btn'
						onClick={handleShowMenu}>
						{isExpanded ? (
							<IoMdClose className='nav_icon close' />
						) : (
							<HiOutlineMenuAlt1 className='nav_icon open' />
						)}
					</button>
				</div>

				{/* Mobile nav */}
				{showMenu && (
					<>
						<ul className='mobile_nav'>
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

						<div className='overlay'></div>
					</>
				)}
				{/* End of Mobile nav */}
			</div>
		</nav>
	);
}

export default Nav;
