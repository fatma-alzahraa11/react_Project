import image from "./assets/Atelier-PH7-08_Web.jpg"

function HeroSection() {
  return (
   
     <section className="heroSection">
  <img src={image} className="heroImage" alt="Hero" />
  <div className="heroText"> احصل علي عقارك مقابل 0 % عموله</div>
</section>

    
  )
}

export default HeroSection