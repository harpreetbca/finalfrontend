import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

const Home = () =>
{
    const [products, setProducts] = useState([]);

const fetchproduct = async()=>
    {
        const res = await API.get("/products/getproduct");
        setProducts(res.data.data);
    }    

const deleteproduct = async(id) =>
{
    await API.delete(`/products/deleteproduct/${id}`);
    fetchproduct();
};

useEffect( () =>
{
    fetchproduct();
},[]);

    return(
        <div>
        <h2>📦Products List</h2>
       {products.map( (product) =>
    (
        <div key={product._id} style={{border: "1px solid black", padding: "15px" , margin: "14px 0"}}>
            <h3>Name : {product.name}</h3>
            <h4>Price : {product.price}</h4>
            <h4>Stock : {product.stock}</h4>
            <Link to={`/edit/${product._id}`}>📝Update</Link>{"     "}
            <button onClick={ () => deleteproduct(product._id)}>🗑️Delete</button>
        </div>
    ))}
    </div>
    );
};

export default Home;