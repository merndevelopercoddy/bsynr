import {NavLink} from 'react-router-dom'; 
const Homecomponent = ()=>{
    return(
     <>
<section className="banner-4">
   <div className="container">
      <div className="row">
         <div className="col-lg-7 align-self-center">
            <div className="banenr-inner">
               <h3 className="mb-20 text-secondary text-center" id="big_text">Ona tili o‘qitish metodikasiga asoslangan, boshlang‘ich sinf o‘quvchilarining yozma nutqini rivojlantirishga yo‘naltirilgan elektron ta’lim resursi</h3>
               <p className="h4 text-secondary text-center">Resurs 1-4-sinf o‘quvchilari, o‘qituvchilari va ota-onalar uchun mo‘ljallangan.</p>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="thumb">
               <img src="images/banner.jpg" alt="img" />
            </div>
         </div>
      </div>
   </div>
</section>

<section className="section-padding pt-0">
   <div className="container">
      <div className="row">
            <div className="col-lg-4 col-md-6">
               <NavLink to="/2-sinf">
               <div className="how-it-works-item works-item-alt shape-style-2 text-center shadow">
                  <img className="position-static" src="images/01.png" alt="" />
                  <h3 className="mt-20 font-weight-600 text-secondary">2-sinf</h3>
                  <p className="mt-20 text-secondary">Ushbu sinflar uchun mavzulashtirilgan mashqlar to‘plami</p>
               </div>
               </NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
               <NavLink to="/3-sinf">
               <div className="how-it-works-item works-item-alt shape-style-2 text-center shadow">
                  <img className="position-static" src="images/02.png" alt="" />
                  <h3 className="mt-20 font-weight-600 text-secondary">3-sinf</h3>
                  <p className="mt-20 text-secondary">Ushbu sinflar uchun mavzulashtirilgan mashqlar to‘plami</p>
               </div>
               </NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
               <NavLink to="/4-sinf">
               <div className="how-it-works-item works-item-alt shape-style-2 text-center shadow">
                  <img className="position-static" src="images/03.png" alt="" />
                  <h3 className="mt-20 font-weight-600 text-secondary">4-sinf</h3>
                  <p className="mt-20 text-secondary">Ushbu sinflar uchun mavzulashtirilgan mashqlar to‘plami</p>
               </div>
               </NavLink>
            </div>
      </div>
   </div>
</section>
     </>
    )
}
export default Homecomponent;