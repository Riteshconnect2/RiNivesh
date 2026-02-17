import React from 'react';
import {Link} from "react-router-dom";



function Navbar() {
   // const [isLoggedIn, setIsLoggedIn] = useState(false);
   
   //   const handleLogin = (e) => {
   //     e.preventDefault();
   
   //     setIsLoggedIn(true);
   //   };
   
   return (
      <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
            <Link class="navbar-brand" to='/' > <img src='Icon.png' height={50} width={250} /></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
             

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                     <Link class="nav-link" to="/About">About<span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/product">Product<span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/pricing">Pricing<span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item active">
                     <Link class="nav-link" to="/support">Support<span class="sr-only">(current)</span></Link>
                  </li>
                  {/* <li class="nav-item active">
                     <Link  className='btn btn-outline-primary' to="/signUp">Signup<span class="sr-only">(current)</span>
                     </Link>
                  </li> */}
               </ul>

            </div>
         </nav>
      </div>
   );
}

export default Navbar;
