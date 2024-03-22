import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, children, onClick }) => {

    const activeStyle = 'underline underline-offset-4';

    return (
        // Use la etiqueta NavLink y le pasé las propiedades to y className
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default NavItem;

