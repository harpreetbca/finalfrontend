import {Link} from "react-router-dom"
import '../App.css';


const Navbar = () =>
{
    return(
    <nav className="navbar">
        <Link to="/" style={{ marginRight: "30px" }}>Home</Link>
        <Link to="/add" className="pro">Add Product</Link>
    </nav>
    );
};

export default Navbar;