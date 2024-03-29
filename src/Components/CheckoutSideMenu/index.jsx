import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context';

import "./CheckoutSideMenu.css";
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

function CheckoutSideMenu() {
    const { 
        isCheckoutSideMenuOpen, 
        closeCheckoutSideMenu,
        cardProduct,
        saveOrder,
        removeProduct,
    } = useContext(ShoppingCardContext);

    const productTotal = totalPrice(cardProduct);

    const handlerCheckout = () => {
        saveOrder({
            date: new Date().getTime(),
            products: cardProduct,
            totalProducts: cardProduct.length,
            totalPrice: productTotal,
        });
        closeCheckoutSideMenu();
    }

    const handlerDelete = (id) => { removeProduct(id); }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-lg">My Order</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                        onClick={() => closeCheckoutSideMenu()}
                    />
                </div>
                
            </div>

            <div className='px-6 overflow-y-scroll flex-1'>
                {cardProduct.map((item) => (
                    <OrderCard 
                        key={item.id} 
                        item={item} 
                        handlerDelete={handlerDelete}
                    />
                ))}
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${productTotal}</span>
                </p>

                <Link to='/my-orders/last'>
                    <button className='bg-black w-full py-3 text-white rounded-lg' onClick={() => handlerCheckout()}>
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }
