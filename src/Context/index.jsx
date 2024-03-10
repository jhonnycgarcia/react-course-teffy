import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ShoppingCardContext = createContext();

const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => { setIsProductDetailOpen(true); };
    const closeProductDetail = () => { setIsProductDetailOpen(false); };

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ShoppingCardContext, ShoppingCardProvider };
