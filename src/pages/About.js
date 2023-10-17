import AboutMain from "../components/AboutMain";
import AboutData from "../components/AboutData";
import AboutReviews from "../components/AboutReviews";
import AboutQualities from "../components/AboutQualities";

const About = () => {
  return (
    <>
      <AboutMain />
      <AboutData />
      <div className="responsive-reviews-qualities">
        <AboutReviews />
        <AboutQualities />
      </div>
    </>
  );
};

export default About;
