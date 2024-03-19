import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context';

import "./CheckoutSideMenu.css";

function CheckoutSideMenu() {
    const { 
        isCheckoutSideMenuOpen, 
        closeCheckoutSideMenu,
    } = useContext(ShoppingCardContext);

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
        </aside>
    )
}

export { CheckoutSideMenu }
