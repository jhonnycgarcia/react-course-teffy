import { createContext, useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "https://images.pexels.com/photos/1089842/pexels-photo-1089842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const DEFAULT_PRODUCT = {
    category: { name: null },
    title: null,
    price: null,
    images: [ DEFAULT_IMAGE ],
};

const ShoppingCardContext = createContext();

const ShoppingCardProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [produc, setProduc] = useState(DEFAULT_PRODUCT);

    const [cardProduct, setCardProduct] = useState([]);
    const removeProduct = (id) => {
        const newCardProduct = cardProduct.filter((item) => item.id !== id);
        setCardProduct(newCardProduct);
    }
    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => { setIsProductDetailOpen(true); };
    const closeProductDetail = () => { setIsProductDetailOpen(false); };

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true); };
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false); };

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            produc,
            setProduc,
            cardProduct,
            setCardProduct,
            removeProduct,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ShoppingCardContext, ShoppingCardProvider };
