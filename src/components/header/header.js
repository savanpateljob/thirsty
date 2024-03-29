import React from "react";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

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
const Header = props => {
	return (
		<Box bgcolor="#d2d2d2" color="#fff" py={1.5}>
			<Box display="flex" alignItems="center" mx={10}>
				<Box flexGrow={1}>
					<Link href="#">
						<svg style={{ overflow: "hidden", height: "56", width: "160" }}>
							<path d="M82,22.5l3.4-4.1c2.3,1.9,4.8,3.2,7.8,3.2c2.3,0,3.8-0.9,3.8-2.5v-0.1c0-1.5-0.9-2.2-5.3-3.3c-5.3-1.3-8.6-2.8-8.6-8V7.7
    c0-4.7,3.8-7.9,9.1-7.9c3.5-0.1,6.9,1.1,9.7,3.3l-3,4.3c-2.3-1.6-4.6-2.6-6.8-2.6s-3.3,1-3.3,2.3v0.1c0,1.7,1.1,2.3,5.6,3.4
    c5.3,1.4,8.3,3.3,8.3,7.8v0.1c0,5.2-3.9,8.1-9.6,8.1C88.9,26.7,85,25.2,82,22.5z"/>
							<path d="M20.6,0.3H0v5.3h7.4v20.8h5.8V5.6h7.4V0.3z" />
							<path d="M129.2,0.5h-20.6v5.3h7.4v20.8h5.8V5.8h7.4V0.5z" />
							<path d="M153.1,0.5l-5.4,9.9l-5.3-9.9h-7.1l9.4,14.8v11.3h5.8V15.2L160,0.5H153.1z" />
							<path fill="#1976D2" d="M70.5,17c3.3-1.2,5.5-3.8,5.5-7.9V9c0-2.4-0.8-4.4-2.2-5.8c-1.7-1.7-4.2-2.6-7.4-2.6H53.3l3.3,5.1h9.3
    c2.7,0,4.4,1.2,4.4,3.6v0.1c0,2.2-0.8,3.6-4.3,3.6l-4.6,0l2,3l0,0l6.7,10.1h6.6L70.5,17z"/>
							<path d="M41.6,0.5v10.1h-9.4V0.5h-5.6V26h5.6V15.7h9.4V26h5.6V0.5H41.6z" />
							<path fill="#1976D2" d="M2.4,36h155.2v20H2.4V36z" />
							<path fill="#FFFFFF" d="M23.3,48.4c0,0.5-0.1,0.9-0.3,1.3c-0.2,0.4-0.5,0.7-0.9,0.9s-0.8,0.4-1.3,0.6c-0.5,0.1-1.1,0.2-1.7,0.2
    c-0.3,0-0.5,0-0.8,0c-0.3,0-0.5,0-0.8-0.1c-0.3,0-0.5-0.1-0.7-0.1c-0.2,0-0.4-0.1-0.6-0.1v-1.4c0.4,0.2,0.9,0.3,1.4,0.3
    c0.5,0.1,1.1,0.1,1.7,0.1c0.5,0,0.9,0,1.2-0.1s0.6-0.2,0.8-0.3c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.1-0.4,0.1-0.7
    c0-0.3-0.1-0.5-0.2-0.7s-0.4-0.4-0.6-0.5s-0.5-0.3-0.9-0.4s-0.7-0.3-1-0.4c-0.3-0.1-0.7-0.3-1-0.5c-0.3-0.2-0.6-0.3-0.9-0.6
    c-0.3-0.2-0.5-0.5-0.6-0.8c-0.2-0.3-0.2-0.7-0.2-1.1c0-0.4,0.1-0.7,0.2-1.1s0.4-0.7,0.7-0.9c0.3-0.3,0.7-0.5,1.2-0.7
    c0.5-0.2,1.1-0.3,1.8-0.3c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0.1c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0.1,0.6,0.1v1.3
    c-0.4-0.1-0.8-0.2-1.2-0.3s-0.8-0.1-1.2-0.1c-0.8,0-1.4,0.1-1.8,0.4s-0.6,0.6-0.6,1.1c0,0.3,0.1,0.5,0.2,0.7s0.4,0.4,0.6,0.5
    s0.5,0.3,0.9,0.4c0.3,0.1,0.7,0.3,1,0.4c0.3,0.1,0.7,0.3,1,0.5c0.3,0.2,0.6,0.4,0.9,0.6c0.3,0.2,0.5,0.5,0.6,0.8
    C23.2,47.6,23.3,48,23.3,48.4z"/>
							<path fill="#FFFFFF" d="M41.1,45.9c0,0.9-0.1,1.8-0.3,2.4s-0.5,1.3-0.9,1.7c-0.4,0.5-0.8,0.8-1.3,1c-0.5,0.2-1,0.3-1.6,0.3
    c-0.7,0-1.3-0.1-1.8-0.4c-0.5-0.2-0.9-0.6-1.2-1.1s-0.6-1-0.7-1.7C33.1,47.6,33,46.9,33,46c0-0.9,0.1-1.7,0.3-2.4
    c0.2-0.7,0.5-1.3,0.9-1.7c0.4-0.4,0.8-0.8,1.3-1c0.5-0.2,1-0.3,1.6-0.3c0.7,0,1.3,0.1,1.8,0.4s0.9,0.6,1.2,1.1
    c0.3,0.5,0.6,1,0.7,1.7C41,44.4,41.1,45.1,41.1,45.9z M39.6,46c0-0.6,0-1.2-0.1-1.7s-0.2-1-0.5-1.3c-0.2-0.4-0.5-0.7-0.8-0.9
    c-0.3-0.2-0.7-0.3-1.2-0.3c-0.5,0-0.8,0.1-1.2,0.3c-0.3,0.2-0.6,0.5-0.8,0.9s-0.4,0.8-0.5,1.3c-0.1,0.5-0.2,1-0.2,1.6
    c0,0.6,0,1.2,0.1,1.7c0.1,0.5,0.3,1,0.5,1.3c0.2,0.4,0.5,0.7,0.8,0.8c0.3,0.2,0.7,0.3,1.2,0.3c0.5,0,0.8-0.1,1.2-0.3
    c0.3-0.2,0.6-0.5,0.8-0.9s0.4-0.8,0.5-1.3C39.6,47.1,39.6,46.6,39.6,46z"/>
							<path fill="#FFFFFF" d="M57.6,51.2h-6V40.8H53V50h4.6L57.6,51.2L57.6,51.2z" />
							<path fill="#FFFFFF" d="M75.1,47.5c0,0.6-0.1,1.1-0.2,1.6c-0.2,0.5-0.4,0.9-0.7,1.2c-0.3,0.3-0.7,0.6-1.2,0.8c-0.5,0.2-1,0.3-1.6,0.3
    c-0.7,0-1.2-0.1-1.7-0.3c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.7-0.6-1.1c-0.1-0.4-0.2-0.9-0.2-1.5v-7h1.4v6.9
    c0,0.4,0,0.8,0.1,1.1c0.1,0.3,0.2,0.6,0.4,0.8s0.4,0.4,0.7,0.5c0.3,0.1,0.6,0.2,1,0.2c0.8,0,1.3-0.2,1.7-0.7
    c0.4-0.4,0.5-1.1,0.5-1.8v-6.9h1.4L75.1,47.5C75.1,47.5,75.1,47.5,75.1,47.5z"/>
							<path fill="#FFFFFF" d="M92.4,42h-3.1v9.2h-1.4V42h-3.1v-1.2h7.6L92.4,42C92.4,42,92.4,42,92.4,42z" />
							<path fill="#FFFFFF" d="M105.1,42h-2.4v-1.2h6.3V42h-2.4v8h2.4v1.2h-6.3V50h2.4V42z" />
							<path fill="#FFFFFF" d="M127.1,45.9c0,0.9-0.1,1.8-0.3,2.4s-0.5,1.3-0.9,1.7c-0.4,0.5-0.8,0.8-1.3,1c-0.5,0.2-1,0.3-1.6,0.3
    c-0.7,0-1.3-0.1-1.8-0.4c-0.5-0.2-0.9-0.6-1.2-1.1c-0.3-0.5-0.6-1-0.7-1.7c-0.2-0.7-0.2-1.4-0.2-2.2c0-0.9,0.1-1.7,0.3-2.4
    c0.2-0.7,0.5-1.3,0.9-1.7c0.4-0.4,0.8-0.8,1.3-1c0.5-0.2,1-0.3,1.6-0.3c0.7,0,1.3,0.1,1.8,0.4s0.9,0.6,1.2,1.1
    c0.3,0.5,0.6,1,0.7,1.7C127,44.4,127.1,45.1,127.1,45.9z M125.6,46c0-0.6-0.1-1.2-0.1-1.7s-0.2-1-0.4-1.3c-0.2-0.4-0.5-0.7-0.8-0.9
    c-0.3-0.2-0.7-0.3-1.2-0.3c-0.4,0-0.8,0.1-1.2,0.3c-0.3,0.2-0.6,0.5-0.8,0.9c-0.2,0.4-0.4,0.8-0.5,1.3c-0.1,0.5-0.2,1-0.2,1.6
    c0,0.6,0.1,1.2,0.1,1.7c0.1,0.5,0.3,1,0.4,1.3c0.2,0.4,0.5,0.7,0.8,0.8s0.7,0.3,1.2,0.3c0.4,0,0.8-0.1,1.2-0.3
    c0.3-0.2,0.6-0.5,0.8-0.9c0.2-0.4,0.4-0.8,0.5-1.3C125.6,47.1,125.6,46.6,125.6,46z"/>
							<path fill="#FFFFFF" d="M143.8,51.2h-1.9l-3.1-6.5l-0.9-2.1v5.3v3.3h-1.3V40.8h1.8l2.9,6.2l1.1,2.4v-5.6v-3h1.3L143.8,51.2L143.8,51.2z
    "/>
						</svg>
					</Link>

				</Box>
				<Box flexShrink={0}>
					<Links color='primary' underline="none" href="#">Home</Links>
					<Links color='primary' underline="none" href="#">About Us</Links>
					<Links color='primary' underline="none" href="#">Services</Links>
					<Links color='primary' underline="none" href="#">Portfolio</Links>
					<Links color='primary' underline="none" href="/contact">Contact As</Links>
				</Box>
			</Box>
		</Box>
	);
}

export default Header;