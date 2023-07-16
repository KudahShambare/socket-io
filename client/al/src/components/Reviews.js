//customer reviews

import {reviews} from "../reviews";

const Reviews = ()=>{

	return <div>

	<h2> Customer Reviews </h2>
<div className="cards-container">
	{reviews.map((rv,id)=>{
		return <div id="reviews-container" key={id}>
		<section  className="review">

		<h3>{rv.name}</h3>

		<p className="review-comment">{rv.comment}</p>

		</section> </div>
	})}
</div>

	</div>


}
export default Reviews;