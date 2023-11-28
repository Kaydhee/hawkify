import './collections.css';

import { MdVerified } from 'react-icons/md';
import { GoArrowUpRight } from 'react-icons/go';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { IoIosArrowDropdown } from 'react-icons/io';

import clonex from '../../assets/clonex.png';
import azuki from '../../assets/azuki.png';
import digi from '../../assets/digi.png';
import renga from '../../assets/renga.png';
import HD from '../../assets/HD.png';
import doodles from '../../assets/doodles.png';
import deGods from '../../assets/deGods.png';
import underground from '../../assets/underground.png';

const data = [
	{
		image: clonex,
		title: 'Clone x - x Takashhi Murak...',
		price: '8.4 ETH',
		volume: '100.5 ETH',
		value: -8,
	},

	{
		image: azuki,
		title: 'Azuki',
		price: '11.55 ETH',
		volume: '129.15 ETH',
		value: +10,
	},
	{
		image: digi,
		title: 'DigiDaigaku Genesis',
		price: '10.9 ETH',
		volume: '120 ETH',
		value: -19,
	},
	{
		image: renga,
		title: 'RENGA',
		price: '1.05 ETH',
		volume: '46.1 ETH',
		value: +17,
	},
	{
		image: HD,
		title: 'HD',
		price: '0.7 ETH',
		volume: '38.5 ETH',
		value: +22,
	},
	{
		image: doodles,
		title: 'Doodles',
		price: '6.5 ETH',
		volume: '68.95 ETH',
		value: -5,
	},
	{
		image: deGods,
		title: 'DeGods',
		price: '560 SOL',
		volume: '5.2k SOL',
		value: +8,
	},
	{
		image: underground,
		title: 'Underground Pass',
		price: '7.25 ETH',
		volume: '46.1 ETH',
		value: +3,
	},
];

function Collections() {
	return (
		<section className='collections'>
			<section className='collections_container'>
				<section className='collections_heading'>
					<h2>trending collections</h2>
					<p>
						see what’s trending in the market based on floor price, volume, etc.
					</p>

					<div className='heading_info'>
						<h4>
							24h <IoIosArrowDropdown />
						</h4>

						<p>
							category <IoIosArrowDropdown />
						</p>

						<p>
							chain <IoIosArrowDropdown />
						</p>

						<p>
							volume <IoIosArrowDropdown />
						</p>

						<span>
							view all <GoArrowUpRight />
						</span>
					</div>
				</section>

				<section className='collection_box'>
					{data.map(({ image, title, price, volume, value }, index) => {
						return (
							<section
								key={index}
								className='collection_card'>
								<div className='collection_image'>
									<img
										src={image}
										alt='collection image'
									/>
								</div>

								<div className='title'>
									<h3>{title}</h3>
									<MdVerified className='verified' />
								</div>

								<div className='price_action'>
									<h5>
										floor price <span>{price}</span>
									</h5>

									<h5>
										volume<span>{volume}</span>
									</h5>

									<small style={{ color: value > 0 ? '#00CB51' : '#FF0000' }}>
										{value}%
									</small>

									<BsArrowUpRightCircleFill className='arrow' />
								</div>
							</section>
						);
					})}
				</section>
			</section>
		</section>
	);
}

export default Collections;
