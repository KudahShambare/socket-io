// import npm modules

import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';


//import local modules

import logo from "../assets/logo.jpeg";
const NavBar = ()=>{
	return <nav>
<section>
<Link to="/">
<img src={logo} alt="logo" id="logo"/>
</Link>
</section>

<section id ="cart">
<Link to="/cart" >
<FaShoppingCart id="my-cart"/>
</Link>
</section>

	</nav>
}
export default NavBar;