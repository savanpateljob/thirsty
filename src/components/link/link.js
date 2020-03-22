import React from "react";
import Link from '@material-ui/core/Link';

const Links = props => {
    return (
        <Link
            component="button"
            variant="body2"
            onClick={() => {
                console.info("I'm a button.");
            }}
        >
            {props.label}
        </Link>
    )
}
export default Links;