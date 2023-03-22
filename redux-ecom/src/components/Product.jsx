import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../redux/actions/productAction';

const Product = () => {

    const cart = useSelector(state => state.cart);

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);

    const [inCart, setInCart] = useState(false)

    useEffect(() => {
        setInCart(cart.find((item) => item.id === product.id))
    }, [cart])

    useEffect(() => {
        const getProductDetails = async () => {
            setLoading(true);
            await axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => {
                    setProduct(res.data)
                    setLoading(false)
                    // console.log(res.data)
                });
        }

        getProductDetails();

    }, []);

    const dispatch = useDispatch();

    const Loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px"
                        width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    {inCart ?
                        <Link className="btn btn-outline-dark px-4 py-2" to="/cart">
                            Go to Cart
                        </Link> :
                        <button className="btn btn-outline-dark px-4 py-2" onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                        </button>
                    }
                </div>
            </>
        )
    }

    return (
        <div className="container my-4">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product
