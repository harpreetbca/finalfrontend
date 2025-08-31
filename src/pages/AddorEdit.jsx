import { useEffect, useState } from "react";
import API from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
const AddorEdit = () =>
{
const [form, setForm] = useState({name: "", price: "", stock: ""});
const Navigate = useNavigate();
const {id} = useParams();

const handledata = (e) =>
{
   setForm({ ...form, [e.target.name] : e.target.value});
}

const handlesubmit = async(e) =>
{
    e.preventDefault();
    if(!form.name || !form.price || !form.stock ) return alert("all the data is required")
        if(id)
        {
            await API.put(`/products/updateproduct/${id}`, form);
        }
        else{
            await API.post("/products/createproduct", form)
        }

        Navigate("/");
};

const loadthedata = async() =>
{
    const res = await API.get(`/products/getproduct/${id}`);
    setForm(res.data.data);
};

useEffect( () =>
{
    if(id) loadthedata();
}, [id]);

    return(

        <div >
             <h2>{id ? "📝UpdateProduct" : "🛒➕Addproduct"}</h2>
            <form onSubmit={handlesubmit} style={{ maxWidth: "500px" }}>
               <input name="name" value={form.name} placeholder="name" onChange={handledata} required style={{ marginTop: 10 }} /><br/>
                <input name="price" value={form.price} placeholder="price" onChange={handledata} type="number" required style={{ marginTop: 10 }}/><br/>
                <input name="stock" value={form.stock} placeholder="stock" onChange={handledata} type="number" required style={{ marginTop: 10 }}/><br/>
                <button type="submit" style={{ padding: "8px", marginTop: "20px" }}>{id ? "📝Update" : "➕Add"} Product</button>
            </form>
        </div>
    )
};

export default AddorEdit;