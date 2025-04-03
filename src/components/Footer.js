import {NavLink} from 'react-router-dom'; 
const Footer = ()=>{
    return(
        <>
            <footer className="footer-newsletter-overlap ">
   <div className="footer-bottom py-3 border-top">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
               Barcha huquqlar himoyalangan - <span className="text-primary">BSYNR</span>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
               <ul className="list-unstyled list-inline">
                  <li className="list-inline-item"><NavLink to="/haqida" className="text-secondary p-2 d-block text-light">Platforma haqida</NavLink></li>
                  <li className="list-inline-item"><NavLink to="/boglanish" className="text-secondary p-2 d-block text-light">Biz bilan bog‘lanish</NavLink></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</footer>
<a href="#top" className="scroll-to-top">
   <span className="fas fa-chevron-up"></span>
</a>
        </>
    )
}
export default Footer;