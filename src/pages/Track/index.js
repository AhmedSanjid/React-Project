import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Track() {
  return (
    <AdminLayout>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Container Tracking System</a>
    </div>
  </nav>

  
  <section id="search-form" className="py-4 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Track Your Container</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form id="search-form">
            <div className="input-group">
              <input type="text" className="form-control" id="serial-number" placeholder="Enter Container Serial Number"/>
              <button className="btn btn-primary" type="button" onclick="trackContainer()">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <section id="tracking-info" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Container Location</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Serial Number</th>
              <th>Location Name</th>
              <th>Size</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody id="tracking-table">
            
          </tbody>
        </table>
      </div>
      <div id="map" className="map-container mt-4"></div>
    </div>
  </section>

   
  {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Sample data for demonstration
    const containerData = {
  ABC123  `{ location Port of Los Angeles, size: 40.5ft, capacity: "22tn" }`,
  DEF456  `{ location Port of Rotterdam, size: 16.5ft, capacity: "12.8tn" }`,
  GHI789  `{ location Port of Singapore, size: 20.00ft, capacity: "15.05tn" }`,
  JKL012  `{ location Port of Shanghai, size: 40.00ft, capacity: "21.57tn" }`
};

    function trackContainer() {
      const serialNumber = document.getElementById('serial-number').value.toUpperCase();
      const tableBody = document.getElementById('tracking-table');
      tableBody.innerHTML = ''; // Clear previous results

      if (containerData[serialNumber]) {
        const { location, lat, lng } = containerData[serialNumber];
        tableBody.innerHTML = `
          <tr>
            <td>${serialNumber}</td>
            <td>${location}</td>
            <td>${lat}</td>
            <td>${lng}</td>
          </tr>
        `;
        updateMap(lat, lng);
      } else {
        tableBody.innerHTML = `<tr><td colspan="4" className="text-center">No data found</td></tr>`;
        document.getElementById('map').innerHTML = '';
      }
    }

    function updateMap(lat, lng) {
      const mapContainer = document.getElementById('map');
      mapContainer.innerHTML = `
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik" style="border: 0; width: 100%; height: 100%;" allowfullscreen="" loading="lazy"></iframe>
      `;
    }
  </script> */}


    </AdminLayout>
  )
}

export default Track