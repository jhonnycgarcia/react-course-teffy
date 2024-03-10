import PropTypes from "prop-types";
import { useContext } from "react";
import { PlusIcon } from '@heroicons/react/24/solid'

import { ShoppingCardContext } from "../../Context";

Card.propTypes = {
    data: PropTypes.object.isRequired
};

// export interface Root2 {
//   id: number
//   title: string
//   price: number
//   description: string
//   images: string[]
//   creationAt: string
//   updatedAt: string
//   category: Category
// }

// export interface Category {
//   id: number
//   name: string
//   image: string
//   creationAt: string
//   updatedAt: string
// }

function Card({data}) {
    const {
        category,
        title,
        price,
        images
    } = data;

    const { 
        setCount,
        openProductDetail,
        setProduc
    } = useContext(ShoppingCardContext);

    const showProductDetail = () => {
        setProduc(data);
        openProductDetail();
    };

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProductDetail()}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {category.name}
                </span>
                <img 
                    className="w-full h-full object-cover rounded-lg"
                    src={images[0]} 
                    alt={title}
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    <PlusIcon className="h-6 w-6 text-blue-500"/>
                </div>
            </figure>
            <p className="flex justify-between items-center">
                <span className="text-sm font-light">
                    {title}
                </span>
                <span className="text-lg font-medium">
                    ${price}
                </span>
            </p>
        </div>
    )
}

export default Card
