import "./App.css";
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Error from "./pages/Error";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/cart" element ={<Cart></Cart>}></Route>
        <Route path="/products" element ={<Products></Products>}></Route>
        <Route path="/info/:id" element ={<Info></Info>}></Route>
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/register" element ={<Register></Register>}> </Route>
        <Route path="*" element ={<Error></Error>}> </Route>
      </Routes>
    </>
  );
}

export default App;
