import './main.css';

// import Button from '../../common components/button/Button';

import spaceWarlock from '../../assets/warlock.png';
import coraltribe from '../../assets/coral.png';
import bakedberserk from '../../assets/bakedberserkk.png';

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
						<button className='btn'>explore marketplace</button>
						{/* <Button></Button> */}
						<button className='btn create_btn'>create</button>
						{/* <Button className='create_btn'></Button> */}
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

				<section className='main_right'>
					<div className='img_box first_box'>
						<div className='img_bg'></div>
						<img
							src={coraltribe}
							alt='coraltribe'
						/>
					</div>

					<div className='img_box second_box'>
						<div className='img_bg'></div>
						<img
							src={spaceWarlock}
							alt='spaceWarlock'
						/>
					</div>

					<div className='img_box third_box'>
						<div className='img_bg'></div>
						<img
							src={bakedberserk}
							alt='bakedberserk'
						/>
					</div>
				</section>
			</section>
		</main>
	);
}

export default Main;
