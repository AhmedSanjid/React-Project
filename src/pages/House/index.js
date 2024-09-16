import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function House() {
  return (
    <AdminLayout>

  <header class="bg-success text-white text-center py-5">
    <div class="container">
      <h1>Warehousing and Distribution</h1>
      <p class="lead">Reliable Global Warehousing and Efficient Distribution for All Your Cargo Needs</p>
      <a href="#warehousing-info" class="btn btn-light btn-lg">Learn More</a>
    </div>
  </header>

  
  <section id="warehousing-info" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Warehousing Solutions</h2>
      <div class="row">
        <div class="col-md-6">
          <p>Our state-of-the-art warehouses are strategically located across major shipping zones to provide easy access and cost-effective storage for your cargo. We offer:</p>
          <ul>
            <li>Climate-controlled facilities for sensitive goods.</li>
            <li>24/7 surveillance and security systems.</li>
            <li>Customizable storage options for all sizes and types of shipments.</li>
            <li>Inventory management and real-time tracking.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://via.placeholder.com/500x300" class="img-fluid" alt="Warehouse Image"/>
        </div>
      </div>
    </div>
  </section>

  
  <section id="locations" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Global Warehousing Locations</h2>
      <div id="map"></div>
     {/* <script>
        function initMap() {
          var locations = [
            { name: 'Los Angeles Warehouse', lat: 34.0522, lng: -118.2437 },
            { name: 'Shanghai Distribution Center', lat: 31.2304, lng: 121.4737 },
            { name: 'Rotterdam Logistics Hub', lat: 51.9225, lng: 4.47917 },
            { name: 'Dubai Free Zone Warehouse', lat: 25.276987, lng: 55.296249 }
          ];

          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: { lat: 20.0, lng: 0.0 }
          });

          locations.forEach(function(location) {
            var marker = new google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name
            });
          });
        }
        window.onload = initMap;
      </script> */}
    </div>
  </section>

  
  <section id="distribution" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Efficient Distribution Services</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Last Mile" class="mb-3"/>
            <h5>Last Mile Delivery</h5>
            <p>Fast and reliable last mile delivery services to ensure your cargo reaches its final destination in time.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Global Network" class="mb-3"/>
            <h5>Global Network</h5>
            <p>Our global distribution network covers all major shipping routes, enabling smooth and hassle-free transportation across continents.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box text-center">
            <img src="https://via.placeholder.com/100" alt="Custom Solutions" class="mb-3"/>
            <h5>Custom Solutions</h5>
            <p>We offer tailor-made logistics and distribution solutions based on your cargo needs, ensuring maximum efficiency and cost savings.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="contact" class="py-5 bg-light">
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
    </AdminLayout>
  )
}
export default House