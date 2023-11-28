import './currency.css';

import ethereum from '../../assets/ethereum.png';
import solana from '../../assets/solanaLogo.png';
import polygon from '../../assets/polygonlogo.png';
import cardano from '../../assets/cardano.png';
import aptos from '../../assets/aptoslogo.png';
import avalanche from '../../assets/avalanche.png';

function Currency() {
	return (
		<section className='currencies'>
			<div className='currencies_container'>
				<img
					src={ethereum}
					alt='ethereum logo'
				/>

				<img
					src={solana}
					alt='solana logo'
				/>

				<img
					src={polygon}
					alt='polygon logo'
				/>

				<img
					src={cardano}
					alt='cardano logo'
				/>

				<img
					src={aptos}
					alt='aptos logo'
				/>

				<img
					src={avalanche}
					alt='avalanche logo'
				/>
			</div>
		</section>
	);
}

export default Currency;
