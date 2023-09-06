import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
       <div className="footer-row-1">
         <section className="footer-col">
          <p>Quick Links</p>
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Shopping</li>
          </ul>
         </section>
         <section className="footer-col">
         <p>Site Links</p>
          <ul>
            <li>Privacy policy</li>
            <li>Shopping details</li>
            <li>Terms & conditions</li>
            <li>Offer Coupons</li>
          </ul>
         </section>
         <section className="footer-col">
         <p>Get to know us</p>
          <ul>
            <li>Know more about us</li>
            <li>Visit Store</li>
            <li>Let's Connect</li>
            <li>Locate Stores</li>
          </ul>
         </section>
       </div>
       <div className="footer-row-2">
           <div className="copyright-section">Copyright &copy; 2023 | Organic Store</div>
           <div className="footer-icons">
              <FaTwitter className="footer-icon" />
              <FaFacebook className="footer-icon" />
              <FaInstagram className="footer-icon" />
              <FaYoutube className="footer-icon" />
           </div>
       </div>
    </footer>
  )
}

export default Footer
