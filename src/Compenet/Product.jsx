import React, { useState } from 'react';
import Mobail from '../assets/Mobail.json';
import { Link } from 'react-router-dom';

function Product() {
    const maxPrice = Math.max(...Mobail.map(p => p.price));
    // const [range, setrang] = useState(maxPrice);
    const [range, setrang] = useState(2000)
    const [cat, setcat] = useState()
    let mobail_data = Mobail.map((m) => {
        return m.cat
    })

    let unique_set = new Set(mobail_data)
    let unique_Array = Array.from(unique_set)


    return (
        <>
            <div className="text-center my-4">
                <div className="alert alert-warning">
                    {
                        unique_Array.map((c) => {
                            return (
                                <button className="btn btn-warning mx-3" onClick={() => setcat(c)}>{c}</button>
                            )
                        })
                    }
                </div>
                <label className="fw-bold text-success">Filter by Price: ₹{range}</label>
                <input
                    type='range'
                    min={10}
                    max={2000}
                    value={range}
                    onChange={(e) => setrang(Number(e.target.value))}
                    className="primary"
                    style={{ width: '10%' }}
                />
            </div>

            <div className="container">
                <div className="row">
                    {
                        Mobail
                            .filter((p) => p.cat == cat)
                            .filter((p) => p.price <= range)
                            .map((m) => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-6 mt-4" key={m.id}>
                                        <div className="card h-100" style={{ minHeight: '450px' }}>
                                            <Link to={`/product_details/${m.id}`}>
                                                <img
                                                    src={m.images[0]}
                                                    className="card-img-top p-3"
                                                    alt={m.model}
                                                    style={{ height: '200px', objectFit: 'cover' }}
                                                />
                                            </Link>

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
                                                <h5 className="card-text">{m.cat}</h5>

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
