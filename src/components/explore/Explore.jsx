import './explore.css';

import { SlNote } from 'react-icons/sl';
import { IoMdNotifications } from 'react-icons/io';
import { FaArrowTrendUp } from 'react-icons/fa6';

function Explore() {
	return (
		<section className='explore'>
			<section className='explore_container'>
				<section className='collections_heading heading'>
					<h2>explore our nft tools</h2>
					<p>we help you become the best version of the degen you want to be</p>
				</section>

				<section className='explore_box'>
					<div className='explore_con'>
						<div className='explore_inner-bg'></div>
						<div className='explore_inner'>
							<SlNote className='explore_icon' />
							<h3>create cool sh*t</h3>
							<p>
								if you’re buzzing with an idea or whatever makes web3 better, we
								provide a platform for you to create your own collection or set
								up your very own marketplace.
							</p>
						</div>
					</div>

					<div className='explore_con'>
						<div className='explore_inner-bg'></div>
						<div className='explore_inner'>
							<IoMdNotifications className='explore_icon' />
							<h3>get live alerts</h3>
							<p>
								keep track of smart wallets from your favorite degens or get
								live updates of tranding collections as they mint on-chain. get
								price history of your fav collections.
							</p>
						</div>
					</div>

					<div className='explore_con'>
						<div className='explore_inner-bg'></div>
						<div className='explore_inner'>
							<FaArrowTrendUp className='explore_icon' />
							<h3>real-time charts</h3>
							<p>
								stay in the know of the green and red candles of nft
								collections. check floor price history, mint price, buy/sell
								pressures and make your trading easier.
							</p>
						</div>
					</div>
				</section>
			</section>
		</section>
	);
}

export default Explore;
