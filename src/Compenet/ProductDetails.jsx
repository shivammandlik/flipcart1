import React from 'react';
import { useParams } from 'react-router-dom';
import Mobail from '../assets/Mobail.json'

function ProductDetails() {
    let id_obj = useParams()
    console.log(id_obj.id)

    
      let product_by_id= Mobail.filter((p)=> p.id == (+id_obj.id) )
        // console.log(product[0])
    let product = product_by_id[0] ;

    return (
        <>
        <div className='container my-5'>
            <br /><br />
            <h1>Product Details Page</h1>
            <hr />

            <div className='row'>
                <div className='col-md-6'>
                    <img src={product.images} className='img-thumbnail' height={400} width={400} alt="" />
                </div>
                <div className='col-md-6'>
                    <h1>{product.model}</h1>
                    <hr />
                    <h4>{product.description}</h4>
                    <br />
                    <h1 className='text-success'>Price : {product.price}</h1>

                </div>


            </div>

        </div>
        </>
    );
}

export default ProductDetails;