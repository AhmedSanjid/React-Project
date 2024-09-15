import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">Green</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex mt-4">
              <a href="index.html"><i className="bi bi-twitter-x"></i></a>
              <a href="index.html"><i className="bi bi-facebook"></i></a>
              <a href="index.html"><i className="bi bi-instagram"></i></a>
              <a href="index.html"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html">About us</a></li>
              <li><a href="index.html">Services</a></li>
              <li><a href="index.html">Terms of service</a></li>
              <li><a href="index.html">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="index.html">Web Design</a></li>
              <li><a href="index.html">Web Development</a></li>
              <li><a href="index.html">Product Management</a></li>
              <li><a href="index.html">Marketing</a></li>
              <li><a href="index.html">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Green</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>

    </footer>


  )
}

export default Footer