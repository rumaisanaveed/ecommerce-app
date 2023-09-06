import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero-section'>
       <div className='hero-container'>
          <section className='hero-section-1'>
             <img className='leaf-img' src="/images/leaf.png" alt="" />
             <p className='first-hero-heading'>Best Quality Products</p>
             <h1 className='main-hero-heading'>Join The Organic Movement!</h1>
             <p className='hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut elit tellus, luctus nec ullamcorper mattis,
              pulvinar dapibus leo.</p>
              <button className='shop-btn'><Link className="shop-now-link" to="/home">SHOP NOW</Link></button>
          </section>
          <section className='hero-section-2'>
            <img src="/images/heroImage.png" alt="" className="hero-img" />
          </section>
       </div>
    </div>
  )
}

export default Hero
