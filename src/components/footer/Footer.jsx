import './footer.css';

import logo from '../../assets/Logo.png';

import {
	FaDiscord,
	FaTwitter,
	FaTelegram,
	FaGithub,
	FaArrowRight,
	FaRegCopyright,
} from 'react-icons/fa';

function Footer() {
	return (
		<footer className='footer'>
			<section className='footer_container'>
				<section className='footer_top'>
					<div className='footer_left'>
						<div className=' footer_logo'>
							<img
								src={logo}
								alt='Hawkify logo'
							/>
							<h2>Hawkify</h2>
						</div>

						<p>
							do almost everything with hawkify nft market tools built for
							degens, by degens.
						</p>

						<ul className='contact_links'>
							<li>
								<FaDiscord />
							</li>
							<li>
								<FaTwitter />
							</li>
							<li>
								<FaTelegram />
							</li>
							<li>
								<FaGithub />
							</li>
						</ul>
					</div>

					<div className='footer_middle'>
						<ul className='footer_links'>
							<h4>explore</h4>
							<li>collection</li>
							<li>favorites</li>
							<li>wallets</li>
							<li>calender</li>
							<li>blog</li>
						</ul>

						<ul className='footer_links'>
							<h4>create</h4>
							<li>marketplace</li>
							<li>collections</li>
							<li>smart wallets</li>
						</ul>

						<ul className='footer_links'>
							<h4>community</h4>
							<li>events</li>
							<li>learn web3</li>
							<li>how-to-nfts</li>
							<li>grants</li>
							<li>dao-ing</li>
						</ul>
					</div>

					<div className='footer_right'>
						<i>
							<h2>know what's up</h2>
						</i>
						<form className='footer_form'>
							<input
								type='text'
								placeholder='your e-mail'
							/>

							<FaArrowRight className='arrow_right' />
						</form>

						<p>
							<FaRegCopyright className='copyright' />{' '}
							<span>2023 Hawkify Labs, Inc.</span>
						</p>

						<p>All Rights Reserved</p>
					</div>
				</section>

				<div className='footer_bottom'>
					<h1>hawkify</h1>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
