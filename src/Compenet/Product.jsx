import React, { useState } from 'react';
import Mobail from '../assets/Mobail.json';

function Product() {
    const maxPrice = Math.max(...Mobail.map(p => p.price));
    const [range, setrang] = useState(maxPrice);

    return (
        <>
          <div className="text-center my-4">
                <label className="fw-bold">Filter by Price: ₹{range}</label>
                <input 
                    type='range' 
                    min={10} 
                    max={maxPrice} 
                    value={range}
                    onChange={(e) => setrang(Number(e.target.value))} 
                    className="form-range"
                    style={{ width: '30%',color:'red' }}
                />     
            </div>

            <div className="container">
                <div className="row">
                    {
                        Mobail
                        .filter((p) => p.price <= range)
                        .map((m) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-6 mt-4" key={m.id}>
                                    <div className="card h-100" style={{ minHeight: '450px' }}>
                                        <img
                                            src={m.images[0]}
                                            className="card-img-top p-3"
                                            alt={m.model}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 
                                                className="card-title" 
                                                style={{
                                                    whiteSpace: 'nowrap', 
                                                    overflow: 'hidden', 
                                                    textOverflow: 'ellipsis'
                                                }}
                                            >
                                                {m.model}
                                            </h5>
                                            <p className="card-text">{m.description}</p>
                                            <p className="card-text">Storage: {m.storage}</p>
                                            <p className="card-text fw-bold text-success">₹{m.price}</p> 
                                            <a href="#" className="btn btn-primary mt-auto">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Product;
