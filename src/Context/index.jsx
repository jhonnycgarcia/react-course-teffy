import { createContext } from "react";
import PropTypes from "prop-types";

const ShoppingCardContext = createContext();

export const ShoppingCardProvider = ({ children }) => {
    return (
        <ShoppingCardContext.Provider value={{}}>
        {children}
        </ShoppingCardContext.Provider>
    );
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
