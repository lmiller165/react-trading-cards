const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];


class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill}</h2>
			</div>
		);
	}
}

class TradingCardContainer extends React.Component {
	render() {
		const tradingCards = [];

		for (const currentCard of tradingCardData){
			tradingCards.push(
				<TradingCard
				  name={currentCard.name}
				  skill={currentCard.skill}
				  imgUrl={currentCard.imgUrl}
				  />
				);
		}

		return(
			<div>{tradingCards}</div>
		);
	}
}

ReactDOM.render(
	<TradingCardContainer />, document.getElementById('printcard')
	);

// ReactDOM.render(
// 	<TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />, 
// 	document.getElementById('balloonicorn') 
// );

// ReactDOM.render(
// 	<TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
// 	document.getElementById('float')
// );

// ReactDOM.render(
// 	<TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
// 	document.getElementById('llambda')
// );

// ReactDOM.render(
// 	<TradingCard name="Shortstack" skill="melting butter" imgUrl="/static/img/shortstack-overflow.jpg" />,
// 	document.getElementById('shortstack')
// );

// ReactDOM.render(
// 	<TradingCard name="Merge" skill="posing and lounging" imgUrl="/static/img/merge.jpg" />,
// 	document.getElementById('merge')
// 	);

