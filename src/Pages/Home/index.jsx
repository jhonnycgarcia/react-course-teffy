import { useState, useEffect } from 'react'
import './Home.css'
import Card from '../../Components/Card';
import Grid from '../../Components/Grid';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setItems(json))
  }, []);

  return (
    <Grid>
      {
        items.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      }
    </Grid>
  )
}

export default Home
