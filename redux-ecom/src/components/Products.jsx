import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            await axios.get("https://fakestoreapi.com/products")
                .then((res) => {
                    setData(res.data)
                    setFilter(res.data)
                    setLoading(false);
                })
        }

        getProducts();
    }, []);

    const filterProducts = (category) => {
        const updateProducts = data.filter((product) => category === product.category)
        setFilter(updateProducts);
    }

    function Loading() {
        return (
            <h3>Loading...</h3>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-dark w-100">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products
