import './card.css';

function Card({ name, description }) {
	return (
		<div className='card'>
			<div className='card-section'>
				<h1 className='card-header'>{name}</h1>
				<p className='card-discription'>{description}</p>
			</div>
		</div>
	);
}

export default Card;
