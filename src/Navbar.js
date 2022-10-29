import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <div className="Navbar">
        <nav>
            <input type="checkbox" id="toggle1" className="menu-toggle"/>

            <label for="toggle1" className="menu-toggle-ui">
            </label>

            <div className="collapse1">
                <ul className="main-menu list-unstyled">
                    <li><Link to="./"><lord-icon src="https://cdn.lordicon.com/hwixfird.json" trigger="morph" colors="primary:#121331"></lord-icon> Home</Link></li>
                    <li><Link to="./Books"><lord-icon className="nav" src="https://cdn.lordicon.com/zjptfwtq.json" trigger="morph" colors="primary:#121331"></lord-icon> Books</Link></li>
                    <li><Link to="./AddBook"><lord-icon src="https://cdn.lordicon.com/mecwbjnp.json" trigger="hover" stroke="100" colors="primary:#000000,secondary:#000000"></lord-icon> AddBook</Link></li>
                    <li><Link to="./BooksID"><lord-icon src="https://cdn.lordicon.com/hcndxtmn.json" trigger="hover" colors="primary:#121331" state="hover-phone-ring"></lord-icon> Contact</Link></li>
                </ul>

                <form id="search-form-1">
                    <input type="text" name="txt-search" id="txt-search" placeholder="Search ..."/>
                    <input type="submit" className="btn-search" value=""/>
                </form>

                <ul className="social-links list-unstyled">
                    <li><Link to="#" target="_blank"></Link></li>
                    <li><Link to="#" target="_blank"></Link></li>
                    <li><Link to="#" target="_blank"></Link></li>
                    <li><Link to="#" target="_blank"></Link></li>
                    <li><Link to="#" target="_blank"></Link></li>
                </ul>
            </div>

            <div className="nav-logo">Books</div>

            <div className="right">
            <Link to="#"><span><lord-icon src="https://cdn.lordicon.com/kjsfgazx.json" trigger="hover" colors="primary:#121331"></lord-icon></span></Link>
            </div>
        </nav>
        
        </div>
        </>
    );
}

export default Navbar;