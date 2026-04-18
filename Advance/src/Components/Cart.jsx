import { useDispatch, useSelector } from "react-redux";
import { decrementCart, clearCart } from "../Redux/Features/CartCount.js"
const Card = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.cart.items);
    console.log(list)
    const total = list.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
    function handleOrder() {
        dispatch(clearCart())
        window.location.href = "/"
    }

    const containerStyle = {
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#f9f9fb",
        minHeight: "100vh"
    };

    const itemRowStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    };

    const imageStyle = {
        width: "100px",
        height: "120px",
        objectFit: "contain",
        marginRight: "25px",
        backgroundColor: "#fff"
    };

    const contentStyle = {
        flex: 1,
    };

    const priceStyle = {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#31395e",
        margin: "10px 0"
    };

    const badgeStyle = {
        fontSize: "0.75rem",
        textTransform: "uppercase",
        color: "#888",
        letterSpacing: "1px"
    };

    const removeBtnStyle = {
        padding: "10px 20px",
        backgroundColor: "transparent",
        color: "#e74c3c",
        border: "1px solid #e74c3c",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        transition: "all 0.3s ease"
    };


    return (
        <>
            {/* <h2 style={{ textAlign: "center", color: "#31395e", fontFamily: "sans-serif" }}>Cart List</h2> */}
            <div style={containerStyle}>
                <h2 style={{ textAlign: "center", color: "#31395e", fontFamily: "sans-serif", marginBottom: "40px" }}>
                    Your Cart
                </h2>
                <div style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#0fa1e0", textAlign: "center", marginTop: "50px" }}>
                    <h4 style={{ fontFamily: "sans-serif", color: "#f5f5f5" }}>Grand Total : ${total}</h4>
                </div>
                {list.length > 0 ? (
                    list.map((item) => (
                        <div key={item.id} style={itemRowStyle}>
                            {/* 1. Use item.image */}
                            <img src={item.image} alt={item.title} style={imageStyle} />

                            <div style={contentStyle}>
                                {/* 2. Use item.category */}
                                <span style={badgeStyle}>{item.category}</span>

                                {/* 3. Use item.title */}
                                <h3 style={{ margin: "5px 0", color: "#2c3e50", fontSize: "1.1rem" }}>
                                    {item.title}
                                </h3>

                                {/* 4. Use item.price */}
                                <p style={priceStyle}>${item.price.toFixed(2)}</p>

                                <div style={{ color: "#f1c40f", fontSize: "0.9rem" }}>
                                    ★ {item.rating.rate} <span style={{ color: "#bdc3c7" }}>({item.rating.count} reviews)</span>
                                </div>
                            </div>

                            <button
                                style={removeBtnStyle}
                                onClick={() => dispatch(decrementCart(item))}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = "#e74c3c";
                                    e.target.style.color = "#fff";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#e74c3c";
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))

                ) : (
                    <div style={{ textAlign: "center", marginTop: "50px" }}>
                        <p style={{ color: "#7f8c8d" }}>No items in your cart yet.</p>
                    </div>
                )}

                <button
                    style={removeBtnStyle}
                    onClick={() => dispatch(clearCart())}


                >
                    Clear Cart
                </button>
                <button
                    style={removeBtnStyle}
                    onClick={handleOrder}

                >
                    Place Order
                </button>


            </div >
        </>
    );
};

export default Card;