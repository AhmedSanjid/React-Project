import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Container() {
  return (
    <AdminLayout>
         
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Crown Marine CORP. Logistics</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Facilities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 
  <header className="bg-success text-white text-center py-5">
    <div className="container">
      <h1>OCEAN TRANSPORT CONTAINER</h1>
      <p className="lead">Efficient and Secure Transportation of Goods Across the Seas</p>
      <a href="#services" className="btn btn-light btn-lg">Explore Services</a>
    </div>
  </header>

  
  <section id="services" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Transportation Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Container Shipping"/>
            <div className="card-body">
              <h5 className="card-title">Container Shipping</h5>
              <p className="card-text">We provide containerized shipping solutions to ensure your goods are transported safely across the world, using our vast fleet of ocean vessels.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Bulk Cargo"/>
            <div className="card-body">
              <h5 className="card-title">Bulk Cargo Shipping</h5>
              <p className="card-text">Our specialized bulk shipping services handle large quantities of goods like raw materials and bulk liquids, ensuring efficient transport and handling.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Refrigerated Shipping"/>
            <div className="card-body">
              <h5 className="card-title">Refrigerated Shipping</h5>
              <p className="card-text">Transport perishable goods with our state-of-the-art refrigerated containers, maintaining product integrity from origin to destination.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Logistics Facilities</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Global Warehousing</h3>
          <p>Our warehousing solutions span the globe, offering secure storage and inventory management to ensure that your goods are stored safely at every step of the journey.</p>
        </div>
        <div className="col-md-6">
          <h3>Customs Clearance & Documentation</h3>
          <p>We provide comprehensive customs clearance and documentation services, ensuring your cargo meets all regulatory requirements, making the shipping process smooth and stress-free.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Tracking & Visibility</h3>
          <p>Stay informed with real-time tracking and visibility on your shipments, ensuring you always know the status and location of your goods, from dispatch to delivery.</p>
        </div>
        <div className="col-md-6">
          <h3>24/7 Customer Support</h3>
          <p>Our customer support team is available 24/7 to assist you with any inquiries, providing expert assistance for all your logistics needs, day or night.</p>
        </div>
      </div>
    </div>
  </section>

  <footer className="bg-dark text-white text-center py-4">
    <p>&copy; 2024 CROWN MARINE CORP. All Rights Reserved.</p>
  </footer>
    </AdminLayout>
  )
}

export default Container