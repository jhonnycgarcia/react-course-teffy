import PropTypes from 'prop-types';

function OrdersCard({ order }) {
    const { 
        date,
        totalProducts,
        totalPrice
    } = order;

    return (
        <div className="flex justify-between items-center mb-3 border-black">
            <p>
                <span>{date}</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    );
}

OrdersCard.propTypes = {
    order: PropTypes.object.isRequired
};

export { OrdersCard };