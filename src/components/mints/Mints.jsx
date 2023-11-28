import './mints.css';

// import { MdVerified } from 'react-icons/md';
import { GoArrowUpRight } from 'react-icons/go';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';

import dubClan from '../../assets/dubclan.png';
import theEyes from '../../assets/theEyes.png';
import theWarriors from '../../assets/theWarriors.png';
import iconHeads from '../../assets/iconHeads.png';
import alpha from '../../assets/alpha.png';
import pixelSauce from '../../assets/pixelSauce.png';

const mints = [
	{
		image: dubClan,
		title: 'Dub Clan NFT',
		currency: 'ETH',
		price: '0.05 ETH',
		volume: '25 ETH',
	},

	{
		image: theEyes,
		title: 'The Eyes',
		currency: 'SOL',
		price: '3.2 SOL',
		volume: '1k SOL',
	},

	{
		image: theWarriors,
		title: 'Warriors NFT',
		currency: 'AETH',
		price: '0.5 AETH',
		volume: '285 AETH',
	},

	{
		image: iconHeads,
		title: 'Icon Heads',
		currency: 'ETH',
		price: '0.25 ETH',
		volume: '300 ETH',
	},

	{
		image: alpha,
		title: 'Alpha NFT',
		currency: 'SOL',
		price: '20 SOL',
		volume: '850 SOL',
	},

	{
		image: pixelSauce,
		title: 'Pixel Sauce',
		currency: 'ETH',
		price: '2.5 ETH',
		volume: '30k ETH',
	},
];

function Mints() {
	return (
		<section className='mints'>
			<section className='mints_container'>
				<div className='mints_heading heading'>
					<h2>top mints</h2>
					<p>see the latest mints as they happen</p>

					<div className='heading_info'>
						<h4>
							1h <IoIosArrowDropdown />
						</h4>

						<p>
							category <IoIosArrowDropdown />
						</p>

						<p>
							chain <IoIosArrowDropdown />
						</p>

						<span>
							view all <GoArrowUpRight />
						</span>
					</div>
				</div>

				<section className='mints_box'>
					{mints.map(({ image, title, currency, price, volume }, index) => {
						return (
							<section
								key={index}
								className='mints_card'>
								<div className='mints_image'>
									<img
										src={image}
										alt='mints image'
									/>
								</div>

								<div className='mints_info'>
									<h3>
										{title} <span>{currency}</span>
									</h3>

									<div className='price_action'>
										<h5>
											floor price <span>{price}</span>
										</h5>

										<h5>
											volume<span>{volume}</span>
										</h5>

										<BsArrowUpRightCircleFill className='arrow' />
									</div>
								</div>
							</section>
						);
					})}
				</section>
			</section>
		</section>
	);
}

export default Mints;
