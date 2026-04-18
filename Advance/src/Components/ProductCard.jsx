import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../Redux/Features/products.js"
import { decrementCart, incrementCart } from '../Redux/Features/CartCount.js';
const ProductCard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    const product = useSelector((state) => state.products.item)
    const cartItems = useSelector((state) => state.cart.items);
    // console.log("cartItems", cartItems)
    const styles = {
        card: {
            fontFamily: "'Inter', system-ui, sans-serif",
            maxWidth: '320px',
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0',
            transition: 'all 0.3s ease'
        },
        imageContainer: {
            width: '100%',
            height: '220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            overflow: 'hidden'
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
        },
        category: {
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#9ca3af',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '8px'
        },
        title: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#1f2937',
            margin: '0 0 10px 0',
            lineHeight: '1.4',
            height: '50px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
        },
        priceTag: {
            fontSize: '24px',
            fontWeight: '800',
            color: '#111827',
            display: 'block',
            marginBottom: '15px'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px'
        },
        rating: {
            fontSize: '14px',
            color: '#f59e0b',
            fontWeight: '600'
        },
        button: {
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '10px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
        },
        disableButton: {
            backgroundColor: '#d24646',
            color: 'white',
            border: 'none',
            padding: '10px 18px',
            borderRadius: '10px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
        }
    };

    return (
        <>
            {
                product.length && product?.map((el) => (
                    <div key={el.id} style={styles.card}>
                        <div style={styles.imageContainer}>
                            <img
                                src={el.image}
                                alt={el.title}
                                style={styles.image}
                            />
                        </div>

                        <div style={styles.category}>{el.category}</div>

                        <h2 style={styles.title}>{el.title}</h2>

                        <span style={styles.priceTag}>${el.price}</span>

                        <div style={styles.footer}>
                            <div style={styles.rating}>
                                ★ {el.rating.rate}
                                <span style={{ color: '#9ca3af', marginLeft: '4px', fontWeight: '400' }}>
                                    ({el.rating.count})
                                </span>
                            </div>

                            {
                                cartItems.find(cart => cart.id === el.id) ?
                                    <button
                                        style={styles.disableButton}
                                        onClick={() => dispatch(decrementCart(el))}
                                    >
                                        Remove
                                    </button> : <button
                                        style={styles.button}
                                        onClick={() => dispatch(incrementCart(el))}
                                        onMouseOver={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
                                        onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
                                    >
                                        Add
                                    </button>

                            }



                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default ProductCard;