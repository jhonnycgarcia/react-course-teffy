import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context';

function ProducDetail() {
    const { isProductDetailOpen, closeProductDetail } = useContext(ShoppingCardContext);

    return (
        <aside 
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-lg">Detail</h2>
                <div>
                    <XMarkIcon 
                        className="h-6 w-6 text-blue-500"
                        onClick={() => closeProductDetail()}
                    />
                </div>
                
            </div>
        </aside>
    )
}

export { ProducDetail }
