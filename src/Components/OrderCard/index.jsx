import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";

function OrderCard({ item }) {
    const { id, title, price, images } = item;
    const { removeProduct } =  useContext(ShoppingCardContext);

    const handlerRemoveProduct = () => {
        removeProduct(id);
    }

    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={images[0]} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" onClick={handlerRemoveProduct}/>
            </div>
        </div>
    );
}

OrderCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes. number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export { OrderCard };