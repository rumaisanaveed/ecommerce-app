import logo from '../components/logo.svg'
import { Link } from "react-router-dom"
import SearchBox from '../components/searchBox'
import MobileMenu from '../components/MobileMenu'

const Header = ( { search, setSearch, handleSearch }) => {

  return (
   <main>
      <header>
         <div>
            <Link to="/"><img src={logo} alt="" className='site-logo'/></Link>
         </div>
         <div className="nav-links">
             <ul>
              <li><Link to="/home" className="link">Everything</Link></li>
              <li><Link to="/groceries" className="link">Groceries</Link></li>
              <li><Link to="/toiletries" className="link">Toiletries</Link></li>
             </ul>
         </div>
         <div className='search-box-container'>
             <SearchBox search={search} setSearch={setSearch} handleSearch={handleSearch} />
         </div>
         <MobileMenu />
      </header>
    </main>
  )
}

export default Header
