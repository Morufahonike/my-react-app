import { Link } from "react-router-dom";
import "@fontsource/poppins";
import './Navbar.css'
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";




const Navbar = () => {

  const [show, setShow] = useState(true)

    return ( 
        <div>
          
            <div className="navlinks">
              <div className="links">
              <div className="nextgen">
                <Link to='/'>
                     <div className="logo">
                         <h1 className='the'>The</h1>
                         <h1 className='next'>Next Gen</h1>
                         <h1 className="show">SHOW</h1>
                     </div>
                </Link>
              </div>

               { show && (
              <div className={`bars ${show ? "open": "close"}`}>
              <div className="others">
                   <Link to='/aboutus'>About Us</Link>
                   <Link to='/event'>Events</Link>
                   <Link to='/talent'>Talents</Link>
                   <Link to='/contact'>Contact</Link>
              </div>
                
              <div className="button"><button>Join Us</button></div>
            </div>
             )}
            <div className="toggle">
              {
                show ? (
                <FaTimesCircle onClick={()=>setShow(!show)}/>
               ):(
               <FaBars onClick={()=>setShow(!show)}/>
                )}
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;