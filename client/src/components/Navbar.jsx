import "../styles/Navbar.css"
import { IconSearch } from "@tabler/icons-react"

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-side">
            <img className="logo" src="/images/Zudio.png" alt="Zudio Player" />
            <h1>Zudio Player</h1>
        </div>
        <div className="search-side">
            <input type="search" placeholder="Search"/>
            <button><IconSearch className="search-icon"/></button>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;