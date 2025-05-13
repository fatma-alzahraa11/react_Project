
import image1 from "./assets/3a435297-bf8b-4c02-9830-289f9f93e3c3.jpeg"
import image3 from "./assets/604906723.jpg"



function Cards() {
  return (
    <div className="ww">
        <br />
  {/* card1 */}
  <div className="card">
    <img src={image1} style={{ width: "100%" }} />
    <h1 className="price1">Baking Tools</h1>
    <p className="price">$14.99</p>
    <ul>
      <li>Perfect tools for baking and desserts.</li>
      <li> High-quality molds and accessories.</li>
      <li> Ideal for homemade sweets.</li>
      <li> Easy to use and clean.</li>
      <li> Your best choice for baked goods.</li>
    </ul>
    <p>
      <button>Buy Now</button>
    </p>
  </div>
  {/* 2 */}
  <div className="card">
    <img src={image3} style={{ width: "80%",height:"50%" }} />
    <h1>Cooking utensils</h1>
    <p className="price">$24.99</p>
    <ul>
      <li> Versatile cookware for every kitchen.</li>
      <li>Made from durable materials.</li>
      <li>Suitable for all types of cooking.</li>
      <li>Ensures even heat distribution.</li>
      <li>Easy to clean and safe to use.</li>
    </ul>
    <p>
      <button>Buy Now</button>
    </p>
  </div>
  {/* 3 */}
  <div className="card">
    <img src={image1} style={{ width: "100%" }} />
    <h1>Serving Dishs</h1>
    <p className="price">$17.9</p>
    <ul>
      <li> Elegant dishes for serving your meals.</li>
      <li>Sleek and stylish design.</li>
      <li>Perfect for gatherings and special occasions.</li>
      <li>Adds a touch of beauty to your table.</li>
      <li>Made with premium quality.</li>
    </ul>
    <p>
      <button>Buy Now</button>
    </p>
  </div>
</div>
  )
}

export default Cards