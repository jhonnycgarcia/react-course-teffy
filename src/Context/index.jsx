import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShoppingCardContext = createContext();

const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ShoppingCardContext, ShoppingCardProvider };
