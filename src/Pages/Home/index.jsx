import { useState, useEffect } from 'react'
import './Home.css'
import Card from '../../Components/Card';
import { ProducDetail } from '../../Components/ProducDetail';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, []);

  return (
    <>
      {
        items.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      }
      <ProducDetail />
    </>
  )
}

export default Home
