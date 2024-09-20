import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Sailing() {
  const [searchTerm, setSearchTerm] = useState('');

  // Example data for all schedules
  const highwaySchedules = [
    { id: "H001", route: "Route A", departure: "2024-09-20 08:00 AM", arrival: "2024-09-20 12:00 PM", status: "On Time" },
    { id: "H002", route: "Route B", departure: "2024-09-21 09:00 AM", arrival: "2024-09-21 01:00 PM", status: "Delayed" }
  ];

  const sailingSchedules = [
    { id: "S001", route: "Sea Route 1", departure: "2024-09-22 06:00 AM", arrival: "2024-09-23 06:00 PM", status: "On Time" },
    { id: "S002", route: "Sea Route 2", departure: "2024-09-23 09:00 AM", arrival: "2024-09-24 12:00 PM", status: "Delayed" }
  ];

  const seawaySchedules = [
    { id: "SW001", route: "Waterway A", departure: "2024-09-25 08:00 AM", arrival: "2024-09-26 02:00 PM", status: "On Time" },
    { id: "SW002", route: "Waterway B", departure: "2024-09-26 09:00 AM", arrival: "2024-09-27 03:00 PM", status: "On Time" }
  ];

  // Filtered data based on search input (if necessary)
  const filteredSchedules = (schedules) => {
    return schedules.filter(schedule => 
      schedule.route.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <AdminLayout>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Combined Schedules</a>
        </div>
      </nav>

      {/* Search Form */}
      <section id="search-form" className="py-4 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Search Schedules</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Route Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search input
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highway Schedule */}
      <section id="highway-schedule" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Highway Schedule</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Route</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedules(highwaySchedules).map(schedule => (
                  <tr key={schedule.id}>
                    <td>{schedule.id}</td>
                    <td>{schedule.route}</td>
                    <td>{schedule.departure}</td>
                    <td>{schedule.arrival}</td>
                    <td>{schedule.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sailing Schedule */}
      <section id="sailing-schedule" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Sailing Schedule</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Route</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedules(sailingSchedules).map(schedule => (
                  <tr key={schedule.id}>
                    <td>{schedule.id}</td>
                    <td>{schedule.route}</td>
                    <td>{schedule.departure}</td>
                    <td>{schedule.arrival}</td>
                    <td>{schedule.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seaway Schedule */}
      <section id="seaway-schedule" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Seaway Schedule</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Route</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredSchedules(seawaySchedules).map(schedule => (
                  <tr key={schedule.id}>
                    <td>{schedule.id}</td>
                    <td>{schedule.route}</td>
                    <td>{schedule.departure}</td>
                    <td>{schedule.arrival}</td>
                    <td>{schedule.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Sailing;