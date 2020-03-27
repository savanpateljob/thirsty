import React from "react";
// import PropTypes from 'prop-types'
import { Link as RouterLink } from "react-router-dom";
import _isEmpty from "lodash/isEmpty";
import Link from "@material-ui/core/Link";

const Links = props => {
    const { children, to, onClick } = props;
    return (
        <React.Fragment>
            {
                !_isEmpty(to) ?
                    <Link component={RouterLink} to={to}> {children} </Link>
                    :
                    <Link component="button" variant="body2" onClick={onClick} >{children} </Link>
            }
        </React.Fragment>
    );
};
// Links.propTypes = { }
export default Links;
