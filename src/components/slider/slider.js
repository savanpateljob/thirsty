import React from "react";
import Box from "@material-ui/core/Box";
import Carousel from 'react-material-ui-carousel'

function Item(props) {
	return (
		<>
			<img className="position-relative img-fluid" src={`${props.item.description}`} alt={`${props.item.description}`} />
			{/* <h2 className="slider-txt">{props.item.name}</h2> */}
		</>
	)
}
const Sliders = props => {
	const items = [
		{
			name: "Random Name #1",
			description: '../images/1.jpg'
		},
		{
			name: "Random Name #2",
			description: '../images/2.jpg'
		},
		{
			name: "Random Name #3",
			description: '../images/3.jpg'
		}
	];
	return (
		<Box>
			<Carousel indicators={false}>
				{
					items.map((item, i) => <Item key={i} item={item} />)
				}
			</Carousel>
		</Box>
	);
}

export default Sliders;