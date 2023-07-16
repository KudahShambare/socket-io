// Landing Page 

// import npm modules

import {
    Link
} from "react-router-dom";


//import local modules

import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";
import MapContainer from "../components/MapContainer";

const Home = () => {
    return < >
  <NavBar / >
        <
        main className = "pages" >
        
      
        <
        div >
        <
        h1 > About Us < /h1>

    <
    p > Adorable Legends is a renowned business specializing in creating exquisite and charming home decor crafts.With a passion
    for creativity and a keen eye
    for detail, we take pride in producing exceptional pieces that add a touch of enchantment to any living space. < /p>

    <
    p > At Adorable Legends, we believe that every home should reflect the unique personality and style of its occupants.That 's why we go above and beyond to design and handcraft a diverse range of home decor crafts that cater to various tastes and preferences. From whimsical figurines to intricate wall hangings, our collection showcases an array of captivating creations that inspire warmth and joy.</p>


    <
    p > Our team of skilled artisans meticulously crafts each piece using high - quality materials and a blend of traditional craftsmanship and contemporary techniques.We pay meticulous attention to every detail, ensuring that our crafts not only look stunning but also stand the test of time. <
        /p>

    <
    p > In addition to our commitment to craftsmanship, we also prioritize sustainability.We strive to minimize our environmental impact by utilizing eco - friendly materials and implementing sustainable production practices whenever possible.By choosing Adorable Legends, you not only adorn your home with beautiful decor but also contribute to a greener and more sustainable future.

    <
    /p>

    <
    p >
        Customer satisfaction is at the core of our business.We strive to provide an exceptional shopping experience, offering personalized assistance and guidance to help you find the perfect piece that complements your home decor vision.Whether you 're looking to transform your living room into a cozy haven or add a touch of whimsy to your bedroom, we have the perfect creation to fulfill your desires.

    <
    /p>


    <
    p > At Adorable Legends, we cherish the idea of creating lasting memories.Our crafts are more than just decorations;
    they become cherished keepsakes that tell stories and evoke emotions.We believe that a well - decorated home is not only visually appealing but also a reflection of the love and care put into curating its ambiance. <
        /p>

    <
    p >
        Join us on a magical journey through the world of home decor crafts.Discover the beauty and charm that Adorable Legends brings to every room.Let us help you turn your house into a haven filled with enchanting legends and timeless elegance.

    <
    /p> < /
    div > <
        div >
        <
        h1 > Our Locations < /h1>

    <
    MapContainer / >
        <
        /div>

    <
    Link to = "/shop" className = "links" >
        <
        button className = "buttons button-88" > Start Shopping < /button> < /
        Link >

        <
        Reviews / >
        <
        /main>

    <
    />
}
export default Home;