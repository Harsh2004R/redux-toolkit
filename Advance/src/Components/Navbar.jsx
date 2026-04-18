import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
const Navbar = () => {
    const val = useSelector((state) => state.cart.items.length);
    // console.log(val)

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#333",
                color: "#fff",
            }}
        >
            <h2 style={{ margin: 0 }}>MyStore</h2>

            <div style={{ display: "flex", gap: "20px" }}>
                <Link to={"/"}> <p style={{ margin: 0, cursor: "pointer", color:"#fff" }}>Home</p></Link>
                <Link to={"/products"}><p style={{ margin: 0, cursor: "pointer", color:"#fff" }}>Products</p></Link>
                <Link to={"/cart"}><p style={{ margin: 0, cursor: "pointer", color:"#fff" }}>Cart</p></Link>
                <p style={{ margin: 0, cursor: "pointer", color: "#FF0000" }}>{val}</p>
            </div>
        </div>
    );
};

export default Navbar;