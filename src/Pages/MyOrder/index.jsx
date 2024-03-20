import { useContext } from "react"
import { ShoppingCardContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyAccount() {
  const { order } = useContext(ShoppingCardContext);

  const lastOrder = order[order.length - 1];
  const products = lastOrder?.products || [];

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='flex flex-col w-28'>
        {products.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MyAccount
