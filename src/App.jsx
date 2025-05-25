import React from 'react'
import Navbar from './Compenet/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Compenet/Home'
import Contact from './Compenet/Contact'
import Error from './Compenet/Error'
import ProductDetails from './Compenet/ProductDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/product_details/:id' element={<ProductDetails />}></Route>



        </Routes>

      </BrowserRouter>



      {/* <Navbar/> */}

      {/* <Product/> */}
      {/* <CustomPaging/>  */}

    </>
  )
}

export default App