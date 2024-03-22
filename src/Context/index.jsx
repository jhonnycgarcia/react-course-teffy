import { createContext, useEffect, useState } from "react";
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
    const clearCardProduct = () => {
        setCardProduct([]);
        setCount(0);
    }
    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => { setIsProductDetailOpen(true); };
    const closeProductDetail = () => { setIsProductDetailOpen(false); };

    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true); };
    const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false); };

    const [order, setOrder] = useState([]);
    const saveOrder = ({date, products, totalProducts, totalPrice}) => {
        const newOrder = {
            date,
            products,
            totalProducts,
            totalPrice,
        };
        setOrder((prev) => [ ...prev, newOrder ]);
        clearCardProduct();
    }

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState(null);

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(json => setItems(json))
    }, []);


    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) => {
            return item.title.toLowerCase().includes(searchByTitle.toLowerCase());
        });
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        console.log('items', items);
        return items?.filter((item) => {
            return item.category.name.toLowerCase().includes(searchByCategory.toLowerCase());
        });
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITTLE') {
            return filteredItemsByTitle(items, searchByTitle);
        }

        if(searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory);
        }

        if(searchType === 'BY_TITTLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter((item) => {
                return item.title.toLowerCase().includes(searchByTitle.toLowerCase());
            });
        }

        if(!searchType) {
            return items;
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) {
          setFilteredItems(filterBy('BY_TITTLE_AND_CATEGORY',items, searchByTitle, searchByCategory));
        }

        if(searchByTitle && !searchByCategory) {
          setFilteredItems(filterBy('BY_TITTLE',items, searchByTitle, searchByCategory));
        }

        if(!searchByTitle && searchByCategory) {
          setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory));
        }

        if(!searchByTitle && !searchByCategory) {
          setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
        }

    }, [items, searchByTitle, searchByCategory]);

    return (
        <ShoppingCardContext.Provider value={{
            items,
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
            order,
            setOrder,
            saveOrder,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ShoppingCardContext, ShoppingCardProvider };
