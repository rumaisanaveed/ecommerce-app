import Ratings from "./Ratings";

const AboutReviews = () => {
  return (
    <div className="about-testimonial-container">
      <div className="about-testimonial-card">
        <img className="testimonial-img-1" src="/images/about-img.jpg" alt="" />
        <Ratings />
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
        <div className="about-testimonial-bio">
          <img src="/images/client1.png" alt="" />
          <p>Mila Kunit</p>
        </div>
      </div>
    </div>
  );
};

export default AboutReviews;
