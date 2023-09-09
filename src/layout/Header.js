import logo from '../components/logo.svg'
import { Link } from "react-router-dom"
// import SearchBox from '../components/searchBox'
import MobileMenu from '../components/MobileMenu'
import {RiShoppingBasketLine} from 'react-icons/ri'

const Header = ( { search, setSearch, handleSearch, cartItemsCount, setCartItemsCount }) => { 
   return (
      <main>
         <header>
            <div>
               <Link to="/"><img src={logo} alt="" className='site-logo'/></Link>
            </div>
            <div className="nav-left">
               <ul>
               <li><Link to="/home" className="link">Everything</Link></li>
               <li><Link to="/groceries" className="link">Groceries</Link></li>
               <li><Link to="/toiletries" className="link">Toiletries</Link></li>
               </ul>
            </div>
            <div className="nav-right">
               <ul>
                  <li>
                     <Link to="/about" className='link'>About</Link>
                  </li>
                  <li>
                     <Link to="/contact" className='link'>Contact</Link>
                  </li>
               </ul>
               <div className='cart-icon-container'>
                  <Link to="/cart">
                     <RiShoppingBasketLine className='cart-icon'/>
                     <span className="cart-items-count">{cartItemsCount}</span>
                  </Link>
               </div>
            </div>
            {/* <div className='search-box-container'>
               <SearchBox search={search} setSearch={setSearch} handleSearch={handleSearch} />
            </div> */}
            <MobileMenu />
         </header>
      </main>
   )
   }

export default Header
