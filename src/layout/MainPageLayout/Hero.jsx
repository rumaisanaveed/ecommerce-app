import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <section className="hero-section-1">
          <img src="/images/leaf.png" alt="" />
          <p className="first-hero-heading">Best Quality Products</p>
          <h1 className="main-hero-heading">Join The Organic Movement!</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link className="shop-btn" to="/home">
            SHOP NOW
          </Link>
        </section>
        <section className="hero-section-2">
          <img src="/images/heroImage.png" alt="" className="hero-img" />
        </section>
      </div>
    </div>
  );
};

export default Hero;
