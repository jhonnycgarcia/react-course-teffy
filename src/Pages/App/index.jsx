import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './AppRoutes'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'

import { ShoppingCardProvider } from '../../Context'

import './App.css'

function App() {

  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
