import React from "react";
import Box from "@material-ui/core/Box";

const Header = props => {
    return (
        <Box display="flex" alignItems="center">
            <Box flexGrow={1}>
        
            </Box>
            <Box flexShrink={0}>
                <ul>
                    <li>home</li>
                </ul>
            </Box>
        </Box>
    );
}

export default Header;