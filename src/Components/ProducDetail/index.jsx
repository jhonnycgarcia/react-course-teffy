import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context';

function ProducDetail() {
    const { 
        isProductDetailOpen, 
        closeProductDetail,
        produc
    } = useContext(ShoppingCardContext);

    const closeProductDetailAside = () => {
        closeProductDetail();
    }

    return (
        <aside 
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-lg">Detail</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                        onClick={() => closeProductDetailAside()}
                    />
                </div>
                
            </div>

            <figure>
                <img 
                    className="w-full h-full rounded-lg px-6 object-cover"
                    src={produc.images[0]}
                    alt={produc.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${produc.price}</span>
                <span className='font-medium text-md'>{produc.title}</span>
                <span className='font-light text-sm'>{produc.description}</span>
            </p>
        </aside>
    )
}

export { ProducDetail }
