import {NavLink} from 'react-router-dom'; 
const Navbar = ()=>{
    return(
       <>
         <div className="preloader"></div>
   <header className="bg-white shadow border-1-main">
      <div className="container-lg">
         <nav className="navbar navbar-expand-xl navbar-dark px-0">

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAlt"> 
               <NavLink className="navbar-brand" to="/">
               <img src="/images/logo-2.png" alt="Logo" style={{ height: '49px' }} />
               </NavLink> 
               <div className="ml-0 ml-xl-4 mt-3 mt-xl-0 mb-3 mb-xl-0 text-center text-xl-right">
                  <NavLink to="/haqida" className="btn btn-sm btn-blue rounded-pill">Platforma haqida</NavLink>
               </div>
            </div>
         </nav>
      </div>
   </header>
       </>
    )
}
export default Navbar;