import React from 'react'
import Navbar from './Compenet/Navbar'
import Product from './Compenet/Product'
import CustomPaging from './Compenet/Slider'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <CustomPaging/> 


  <Routes>

    <Route path='/' element={<Product/>}></Route>
  </Routes>
  
  </BrowserRouter>



  {/* <Navbar/> */}

{/* <Product/> */}
{/* <CustomPaging/>  */}
    
    </>
  )
}

export default App