import { TiTick } from "react-icons/ti";
import StartShoppingBtn from "./buttons/StartShoppingBtn";

const AboutQualities = () => {
  return (
    <div className="about-qualities-container">
      <div className="qualities-container-1">
        <img src="/images/organic-badge.png" alt="" />
        <div className="qualities-container1-content">
          <h1>Certified Products</h1>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="qualities-container-2">
        <h1>We Deal With Various Quality Organic Products!</h1>
        <img src="/images/leaf.png" alt="" />
        <div className="about-qualities">
          <ul>
            <div className="quality">
              <TiTick className="tick" />
              <li>Fresh fruits</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Dry fruits</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Fresh vegetables</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Dried vegetables</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Dried vegetables</li>
            </div>
          </ul>
          <ul>
            <div className="quality">
              <TiTick className="tick" />
              <li>Beauty products</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Milk products</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Organic honey</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Organic tea</li>
            </div>
            <div className="quality">
              <TiTick className="tick" />
              <li>Dried vegetables</li>
            </div>
          </ul>
        </div>
        <StartShoppingBtn />
      </div>
    </div>
  );
};

export default AboutQualities;
