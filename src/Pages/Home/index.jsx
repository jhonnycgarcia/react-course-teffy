import { useContext } from 'react'
import './Home.css'
import Card from '../../Components/Card';
import { ProducDetail } from '../../Components/ProducDetail';
import { ShoppingCardContext } from '../../Context';

function Home() {
  const {
    items,
    setSearchByTitle,
  } = useContext(ShoppingCardContext);

  const handlerOnInputChage = (e) => {
    const value = e.target.value;
    setSearchByTitle(value)
  }

  return (
    <>
      <div className="flex w-full items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">
          Excluvise Products
        </h1>
      </div>

      <input 
        type="text" 
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => handlerOnInputChage(event)}
      />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      <ProducDetail />
    </>
  )
}

export default Home
