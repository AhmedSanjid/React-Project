import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Lcl() {
  return (
    <AdminLayout>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Crown Marine CORP. Logistics</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Facilities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>About Container Load</h1>
      <p class="lead">Comprehensive Guide to Full Container Load (FCL) and Less than Container Load (LCL) Shipping</p>
      <a href="#services" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="services" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Types of Container Loads</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Full Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Full Container Load (FCL)</h5>
              <p class="card-text">FCL refers to a shipment where an entire container is used exclusively for one customer’s cargo. It ensures minimal handling and faster transit times.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <img src="https://via.placeholder.com/500x250" class="card-img-top" alt="Less than Container Load"/>
            <div class="card-body">
              <h5 class="card-title">Less than Container Load (LCL)</h5>
              <p class="card-text">LCL is a cost-effective solution where cargo from multiple shippers is consolidated into one container. Ideal for small shipments that don’t require a full container.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="bg-light py-5">
    <div class="container">
      <h2 class="text-center mb-4">Cargo Facilities</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Warehousing" class="mb-3"/>
            <h5>Global Warehousing</h5>
            <p>We provide secure, climate-controlled warehousing facilities at major ports worldwide to safeguard your cargo before or after shipping.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Customs" class="mb-3"/>
            <h5>Customs Clearance</h5>
            <p>Expert handling of all customs documentation and clearance procedures to ensure smooth, hassle-free transport of goods across borders.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Tracking" class="mb-3"/>
            <h5>Real-Time Tracking</h5>
            <p>Track your shipment in real time with our advanced tracking system, providing visibility from loading to delivery at the destination port.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Get in Touch</h2>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <button type="submit" class="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer class="bg-dark text-white text-center py-4">
    <p>&copy; 2024 CROWN MARINE CORP. All Rights Reserved.</p>
  </footer>

    </AdminLayout>
  )
}

export default Lcl