import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeProduct } from '../redux/actions/productAction';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const ShowProducts = () => {
        return (
            <>
                {cart.map((product) => {
                    return (
                        <div className="card mb-3" key={product.id}>
                            <div className="row g-2">
                                <div className="col-md-4 p-2">
                                    <img src={product.image} className="img-fluid rounded-start" width="250px" alt="sdf" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <h5>Price: $ {product.totalPrice.toFixed(2)}</h5>
                                        <div className="qty-wrapper d-flex flex-row align-items-center gap-2 my-3">
                                            <button className="btn btn-outline-dark" onClick={() => dispatch(removeFromCart(product))}>-</button>
                                            <span className="fw-bolder">{product.qty}</span>
                                            <button className="btn btn-outline-dark" onClick={() => dispatch(addToCart(product))}>+</button>

                                            <button className="btn btn-danger px-4 py-2 ms-4" onClick={() => dispatch(removeProduct(product))}>
                                                Remove
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-6 fw-bolder text-center">Your Cart
                    </h1>
                    <hr />
                </div>
                <h3 className="text-end mb-4">Total Cart Value: $ {cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)}</h3>
            </div>
            <div className="row justify-content-center">
                <ShowProducts />
            </div>
        </div>
    )
}

export default Cart
