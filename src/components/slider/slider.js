import React from "react";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

const Links = styled(Link)`
  color:#212121;
  font-weight: bold;
  display: inline-block;
  cursor: pointer;
  padding: 1em;
  &:hover {
    color: #1976D2;
    transform: translate(15px, -15px) rotate(20deg);
    display: inline-block;
  }  
`;
function Item(props) {
	return (
		<Paper>
			<img style={{ position: "relative" }} src={`${props.item.description}`} alt={`${props.item.description}`} />
			<h2 style={{ position: "absolute", top: '0', right: '0', bottom: '0', left: '0', color: "#fff" }}>{props.item.name}</h2>
		</Paper>
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
		<Box bgcolor="#d2d2d2" color="#fff" py={1.5}>
			<Carousel>
				{
					items.map((item, i) => <Item key={i} item={item} />)
				}
			</Carousel>
		</Box>
	);
}

export default Sliders;