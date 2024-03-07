import { useContext } from "react";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import NavItem from "./NavItem";
import { ShoppingCardContext } from "../../Context";

function Navbar() {
    const { count } = useContext(ShoppingCardContext);

    const leftMenu = [
        {
            to: '/',
            label: 'Shopi',
            className: 'font-semibold text-lg'
        },
        {
            to: '/all',
            label: 'All',
            className: ''
        },
        {
            to: '/clothes',
            label: 'Clothes',
            className: ''
        },
        {
            to: '/electronics',
            label: 'Electronics',
            className: ''
        },
        {
            to: '/furnitures',
            label: 'Furnitures',
            className: ''
        },
        {
            to: '/toys',
            label: 'Toys',
            className: ''
        },
        {
            to: '/others',
            label: 'Others',
            className: ''
        }
    ];

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                {leftMenu.map((item) => (
                    <li key={item.label} className={item.className}>
                        <NavItem to={item.to}>{item.label}</NavItem>
                    </li>
                ))}
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">jhonnycgarcia@gmail.com</li>
                <li><NavItem to='/my-orders'>My Orders</NavItem></li>
                <li><NavItem to='/my-account'>My Account</NavItem></li>
                <li><NavItem to='/sign-in'>Sign In</NavItem></li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-blue-500" />
                    <div>{count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
