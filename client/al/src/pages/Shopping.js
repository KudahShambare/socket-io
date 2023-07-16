
//Catalogue

//import local modules

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { products } from "../our_products";


const Shopping = ({setCart,cart})=>{

	
	return <>
		<NavBar/>
	<main className="pages">
	
	<h1> Catalogue </h1>
<div className="cards-container">
	{products.map((elem,id) => {
		return <div id="products-container" key={id}>


		<section  className="product">

		<h4> {elem.name} </h4>

		<img src={elem.photo} alt="" className="product-img" />

		<h5> R{elem.price} </h5>


<button
onClick = {
	()=>{
		alert(`${elem.name} added to the cart`);
		setCart([...cart,elem]);
	}
}

> Add to cart </button>
		</section>
	</div>

	})}

	</div>

	</main>
<Footer/>


	</>
}
export default Shopping;