import Navbar from "./components/Navbar";
import AddorEdit from "./pages/AddorEdit";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

 const App = () =>
{
  return(

<Router>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/add" element={<AddorEdit />}/>
    <Route path="/edit/:id" element={<AddorEdit />}/>

  </Routes>
</Router>

  );
}

export default App;