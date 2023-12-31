import AboutMain from "../components/AboutMain";
import AboutData from "../components/AboutData";
import AboutReviews from "../components/AboutReviews";
import AboutQualities from "../components/AboutQualities";

const About = () => {
  return (
    <div className="">
      <AboutMain />
      <AboutData />
      <div className="responsive-reviews-qualities">
        <AboutReviews />
        <AboutQualities />
      </div>
    </div>
  );
};

export default About;
