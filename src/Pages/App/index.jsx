import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './AppRoutes'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'

import { ShoppingCardProvider } from '../../Context'

import './App.css'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

function App() {

  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
