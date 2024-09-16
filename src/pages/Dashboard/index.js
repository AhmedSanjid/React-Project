import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Dashboard() {
  return (
    <AdminLayout>
        {/* Hero Section */}
  <section id="hero" className="hero section accent-background">

<div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

  <div className="carousel-item active">
    <img src="assests/img/hero-carousel/hero-carousel-1.jpg" alt=""/>
    <div className="carousel-container">
      <h2>Welcome to Crown</h2>
      <p>"And O my people, give full measure and weight in justice and do not deprive the people of their due and do not commit abuse on the earth, spreading corruption" Surah:Hud-85 </p>
      <a href="#featured-services" className="btn-get-started">Get Started</a>
    </div>
  </div>{/* End Carousel Item */}

</div>

</section>{/* /Hero Section */}

{/* Featured Services Section */}
<section id="featured-services" className="featured-services section light-background">

<div className="container">

  <div className="row gy-4">

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-activity icon"></i></div>
        <h4><a href="" className="stretched-link">Sailing Schedules</a></h4>
        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
        <h4><a href="" className="stretched-link">More Services</a></h4>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
        <h4><a href="" className="stretched-link">All-in-One</a></h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item position-relative">
        <div className="icon"><i className="bi bi-broadcast icon"></i></div>
        <h4><a href="" className="stretched-link">Cargo Traking</a></h4>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
      </div>
    </div>{/* End Service Item */}

  </div>

</div>

</section>{/* /Featured Services Section */}

{/* About Section */}
<section id="about" className="about section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>About Us</h2>
  <p>Logistics made easy through digital solutions</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row gy-4">
    <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
      <img src="assests/img/about.jpg" className="img-fluid" alt=""/>
      <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
    </div>
    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
      <h3>True industry-leading customer experience isn’t a vision. It’s a passion. A passion for our customers whose business is dependent on moving the right products to the right market at the right time.</h3>
      <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i className="bi bi-check2-all"></i> <span>An intuitive platform to manage all your shipments and tasks in one place.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Instant and transparent prices so you can plan and budget with peace of mind.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Book shipments in just a few steps and easily add extra services like inland transportation and customs services.</span></li>
      </ul>
      <p>
        Crown Go is for small and medium businesses looking for simple and reliable global transportation solutions. You don’t need to be a shipping expert to get started with Crown Go.
      </p>
    </div>
  </div>

</div>

</section>{/* /About Section */}

{/* Why Us Section */}
<section id="why-us" className="why-us section">

<div className="container">

  <div className="row no-gutters">

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="100">
      <span>01</span>
      <h4>Automotive logistics services</h4>
      <p>At Maersk, we ensure that your automotive logistics runs smoothly by making sure that your components, technology and raw materials are always at hand to keep your assembly line moving.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="200">
      <span>02</span>
      <h4>Industry sectors</h4>
      <p>Regardless of your industry, your commodity, or your key markets, Maersk offers global and local logistics solutions that enable small and large businesses to grow. </p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="300">
      <span>03</span>
      <h4>Creating services tailored to you</h4>
      <p>From plastics to paint, beauty to home care products and even automotive parts, the chemical supply chain comprises a myriad of products.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="400">
      <span>04</span>
      <h4>End-to-end control of your retail supply chain</h4>
      <p>Access the key enablers for a reliable supply chain to drive precision and deliver personalised customer experiences throughout your retail supply chain process flow.</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="400">
      <span>05</span>
      <h4>Sapiente Magnam</h4>
      <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
    </div>{/* End Card Item */}

    <div className="col-lg-4 col-md-6 card" data-aos="fade-up" data-aos-delay="600">
      <span>06</span>
      <h4>Facilis Impedit</h4>
      <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
    </div>{/* End Card Item */}

  </div>

</div>

</section>{/* /Why Us Section */}

{/* Clients Section */}
<section id="clients" className="clients section light-background">

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="swiper init-swiper">

    <div className="swiper-wrapper align-items-center">
      <div className="swiper-slide"><img src="assests/img/clients/client-1.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-2.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-3.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-4.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-5.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-6.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-7.png" className="img-fluid" alt=""/></div>
      <div className="swiper-slide"><img src="assests/img/clients/client-8.png" className="img-fluid" alt=""/></div>
    </div>
    <div className="swiper-pagination"></div>
  </div>

</div>

</section>{/* /Clients Section */}

{/* Services Section */}
<section id="services" className="services section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Logistics Solutions</h2>
  <p>We focus on solving your supply chain needs from end to end, taking the complexity out of container shipping. This is why we offer solutions addressing the entire product journey</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row g-5">

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item item-cyan position-relative">
        <i className="bi bi-activity icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Resilience</a></h3>
        <p>Build robust processes and business continuity plans within your supply chain to be able to bounce back from disruptions.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item item-orange position-relative">
        <i className="bi bi-broadcast icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Flexibility and agility</a></h3>
        <p>Empowering you with the ability to place inventory according to market demand rather than building buffer inventory.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item item-teal position-relative">
        <i className="bi bi-easel icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Speed</a></h3>
        <p>Increase inventory speed to market, ensuring that your product gets to the shelves precisely on time and as planned.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item item-red position-relative">
        <i className="bi bi-bounding-box-circles icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Reliability</a></h3>
        <p>Reduce frictions within your supply chain with fewer handovers thanks to a reliable partner who ensures cost-efficiency.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div className="service-item item-indigo position-relative">
        <i className="bi bi-calendar4-week icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Customisation</a></h3>
        <p>Experience customised processes with seamless system data communication between our systems and yours.</p>
      </div>
    </div>{/* End Service Item */}

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div className="service-item item-pink position-relative">
        <i className="bi bi-chat-square-text icon"></i>
        <h3><a href="service-details.html" className="read-more stretched-link">Sustainability</a></h3>
        <p>Get better alternatives to specific supply chain processes to help your businesses’ overall sustainability goals.</p>
      </div>
    </div>{/* End Service Item */}

  </div>

</div>

</section>{/* /Services Section */}

{/* Call To Action Section */}
<section id="call-to-action" className="call-to-action section accent-background">

<div className="container">

  <div className="row" data-aos="zoom-in" data-aos-delay="100">
    <div className="col-xl-9 text-center text-xl-start">
      <h3>Call To Action</h3>
      <p>Nature Avobe all, Be Sustainable with Crown Marine CORP.</p>
    </div>
    <div className="col-xl-3 cta-btn-container text-center">
      <a className="cta-btn align-middle" href="#">Call To Action</a>
    </div>
  </div>

</div>

</section>{/* /Call To Action Section */}

{/* Portfolio Section */}
<section id="portfolio" className="portfolio section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Services</h2>
  <p>From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller - Maersk is developing solutions that meet customer needs from one end of the supply chain to the other.</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" className="filter-active">All</li>
      <li data-filter=".filter-app">App</li>
      <li data-filter="#filter-product">Product</li>
      <li data-filter=".filter-branding">Branding</li>
      <li data-filter=".filter-books">Books</li>
    </ul>{/* End Portfolio Filters */}

    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-1.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">App 1</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-1.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Product 1</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Branding 1</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/books-1.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Books 1</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-2.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">App 2</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-2.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Product 2</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Branding 2</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/books-2.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Books 2</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/app-3.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">App 3</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/product-3.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Product 3</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Branding 3</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
        <div className="portfolio-content h-100">
          <a href="assests/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assests/img/portfolio/books-3.jpg" className="img-fluid" alt=""/></a>
          <div className="portfolio-info">
            <h4><a href="portfolio-details.html" title="More Details">Books 3</a></h4>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      </div>{/* End Portfolio Item */}

    </div>{/* End Portfolio Container */}

  </div>

</div>

</section>{/* /Portfolio Section */}

{/* Team Section */}
<section id="team" className="team section light-background">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>{/* End Section Title */}

<div className="container">

  <div className="row">

    <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="member">
        <img src="assests/img/team/team-1.jpg" className="img-fluid" alt=""/>
        <div className="member-content">
          <h4>Walter White</h4>
          <span>Web Development</span>
          <p>
            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
          </p>
          <div className="social">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
      <div className="member">
        <img src="assests/img/team/team-2.jpg" className="img-fluid" alt=""/>
        <div className="member-content">
          <h4>Sarah Jhinson</h4>
          <span>Marketing</span>
          <p>
            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
          </p>
          <div className="social">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>{/* End Team Member */}

    <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
      <div className="member">
        <img src="assests/img/team/team-3.jpg" className="img-fluid" alt=""/>
        <div className="member-content">
          <h4>William Anderson</h4>
          <span>Content</span>
          <p>
            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
          </p>
          <div className="social">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>{/* End Team Member */}

  </div>

</div>

</section>{/* /Team Section */}

{/* Contact Section */}
<section id="contact" className="contact section">

{/* Section Title */}
<div className="container section-title" data-aos="fade-up">
  <h2>Complaint Box</h2>
  <p>The worst person to be around is the one who complains about everything and appreciates nothing; The Unhappy, Negative Soul who is quick to find fault with even the best of intentions.</p>
</div>{/* End Section Title */}

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-5">

      <div className="info-wrap">
        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>A.K khan Road, Akborhsha, Chittagong</p>
          </div>
        </div>{/* End Info Item */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p>+8809696426844</p>
          </div>
        </div>{/* End Info Item */}

        <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p>crowncorp@yahoo.com</p>
          </div>
        </div>{/* End Info Item */}

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>

    <div className="col-lg-7">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">Your Name</label>
            <input type="text" name="name" id="name-field" className="form-control" required=""/>
          </div>

          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">Your Email</label>
            <input type="email" className="form-control" name="email" id="email-field" required=""/>
          </div>

          <div className="col-md-12">
            <label htmlFor="subject-field" className="pb-2">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject-field" required=""/>
          </div>

          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">Message</label>
            <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>{/* End Contact Form */}

  </div>

</div>

</section>{/* /Contact Section */}
    </AdminLayout>
  )
}

export default Dashboard