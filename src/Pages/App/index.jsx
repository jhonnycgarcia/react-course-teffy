import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './AppRoutes'
import Navbar from '../../Components/Navbar'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App