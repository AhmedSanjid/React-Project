import React from 'react';
import Header from './include/header';
import Footer from './include/footer';
import './assests/vendor/bootstrap/css/bootstrap.min.css'
import './assests/vendor/bootstrap-icons/bootstrap-icons.css'

import './assests/vendor/glightbox/css/glightbox.min.css'
import './assests/vendor/swiper/swiper-bundle.min.css'
import './assests/css/main.css'
function AdminLayout({children}) {
  return (
  <>
  
<Header/>
<div id="app">
    <main className="main">

    <main>{children}</main>

    </main>

    <Footer/>

    {/* Scroll Top */}
    <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

</div>
  </>
  )
}

export default AdminLayout