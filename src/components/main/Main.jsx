import './main.css';

import Button from '../../common components/button/Button';

import spaceWarlock from '../../assets/spaceWarlock.png';
import coraltribe from '../../assets/coraltribe.png';
import bakedberserk from '../../assets/bakedberserk.png';

function Main() {
	return (
		<main className='main'>
			<section className='main_container'>
				<div className='main_left'>
					<h1>nft market tools for degens, by degens</h1>

					<p>
						analyze the market, track and automate profit and loss, check mint
						and floor price history, see what’s trending, and build cool nft
						sh*t with our on-chain market tools.
					</p>

					<div className='ctas'>
						<Button>explore marketplace</Button>
						<Button className='create_btn'>create</Button>
					</div>

					<div className='stats'>
						<h3>
							4K+ <span>collections</span>
						</h3>
						<h3>
							80K+ <span>market volume</span>
						</h3>
						<h3>
							1M+ <span>art sales</span>
						</h3>
					</div>
				</div>

				<div className='main_right'>
					<div className='img_box first_box'>
						<img
							src={coraltribe}
							alt='coraltribe'
						/>
					</div>

					<div className='img_box second_box'>
						<img
							src={spaceWarlock}
							alt='spaceWarlock'
						/>
					</div>

					<div className='img_box third_box'>
						<img
							src={bakedberserk}
							alt='bakedberserk'
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;
