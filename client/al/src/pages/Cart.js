

//import npm modules
import { Link,useNavigate } from "react-router-dom";
//import local modules


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Cart = ({ cart , setCart})=>{

//cart state



	let val = cart.length;

let total = 0;
cart.forEach((val)=>{
	total+=val.price;
})

//useNavigate

const navigate = useNavigate();

//confirm order function 
const confirmOrder = ()=>{
	let name = window.prompt("What is your name?","");
	let phone = window.prompt("Plaase give us your phone number for us to communicate with you.");
    let email = window.prompt("Plaase give us your email number for extended communication."); 

	alert(`Hi ${name}, your order has been confirmed, we are going to call you soon.`);

	sendToServer(name,phone,email,cart);
	
	setCart([])
	navigate("/");
	

}

const sendToServer = async (customerName,customerPhone,customerEmail,customerCart)=>{

	customerCart= customerCart.map((item)=>{
		return {
			"Item":item.name,
			"Price":item.price
		}
	})

	await fetch("https://adorable-legends-test.beast-o.com/orders",{
		method:"POST",
		//mode:"cors",
		headers:{
			"Content-Type":"application/json"

		},
		body: JSON.stringify({
			name:customerName,
			phone:customerPhone,
			email:customerEmail,
			cart:customerCart
		})
	}).then((resp)=>{
		console.log(resp);
	})

}


	return <>
	<NavBar/>

	<main className="pages">

	{val === 0 ?  <>
	<div id="empty-cart">


<h2> Your Cart Is Currently Empty </h2>


<Link to="/shop" className="links">
<button className="buttons button-88" >Start Shopping</button>
</Link>

	</div>

	<Footer/>

	</>
 : 
<>
<div id="full-cart">
<section id="cart-card">
<h2> My Cart </h2>

	 {cart.map((elem,id)=>{
         return <section className="cart-item">
         <span>{elem.name}</span> <span> R{elem.price}</span>
         </section>
	 })}
<section className="cart-item" id="cart-total" >
	 <span> Total </span>    <span> R{total} </span>
</section>

</section>


<button className="buttons button-88"  onClick={confirmOrder}>Confirm Order</button>
</div>

<Footer/>
</>
	  }


	</main>
	</>
}
export default Cart;