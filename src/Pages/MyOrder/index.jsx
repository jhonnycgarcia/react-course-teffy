import { useContext } from "react"
import { ShoppingCardContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";

function MyAccount() {

  const { order } = useContext(ShoppingCardContext);
  console.log('order', order);

  const lastOrder = order[order.length - 1];
  const products = lastOrder?.products || [];

  return (
    <>
      <div className='flex flex-col w-28'>
      My Order

        {products.map((item) => (
          <OrderCard key={item.id} item={item} />
        ))}
    </div>
    </>
  )
}

export default MyAccount
