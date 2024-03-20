import { useContext } from "react";
import { ShoppingCardContext } from "../../Context";
import { OrdersCard } from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyAccount() {
  const {
    order
  } =  useContext(ShoppingCardContext);

  return (
    <div className="flex- flex-col">
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>

      <div>
        {order.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard order={item} />
          </Link>
        ))}
      </div>

    </div>
  )
}

export default MyAccount
