import React from 'react';
import Mobail from '../assets/Mobail.json';

function Product(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        Mobail.map((m) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-6 mt-4" key={m.id}>
                                    <div 
                                      className="card h-100"  // h-100 makes card fill the height of the col div
                                      style={{ minHeight: '450px' }} // fixed min height for all cards
                                    >
                                        <img
                                            src={m.images[0]}  // show only first image
                                            className="card-img-top p-3"
                                            alt={m.model}
                                            style={{ height: '200px', objectFit: 'cover' }} // fixed height & cover image
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
                                          <p className="card-text fw-bold">${m.description}</p>
                                          <p className="card-text fw-bold">${m.storage}</p>


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
