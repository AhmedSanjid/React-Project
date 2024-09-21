import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useState } from 'react';

const Tech = () => {
  // Sample data for the schedules
  const scheduleData = {
    sailing: [
      { id: "pacific", country: "USA", depPort: "Los Angeles", depDate: "2024-09-18", arrPort: "Yokohama", arrDate: "2024-10-05", time: "17 Days" },
      { id: "Atlantic Voyager", country: "USA", depPort: "New York", depDate: "2024-09-21", arrPort: "Rotterdam", arrDate: "2024-10-04", time: "13 Days" }
    ],
    airfreight: [
      { id: "AA789", country: "USA", depAirport: "JFK, New York", depDate: "2024-09-22", arrAirport: "Heathrow, London", arrDate: "2024-09-22", time: "7 Hours" },
      { id: "LH654", country: "Germany", depAirport: "FRA, Frankfurt", depDate: "2024-09-25", arrAirport: "LAX, Los Angeles", arrDate: "2024-09-25", time: "12 Hours" }
    ],
    highway: [
      { id: "TRK-123", country: "USA", depCity: "Chicago", depDate: "2024-09-20", arrCity: "Dallas", arrDate: "2024-09-21", time: "1 Day" },
      { id: "trk456", country: "Canada", depCity: "Toronto", depDate: "2024-09-25", arrCity: "Vancouver", arrDate: "2024-09-28", time: "3 Days" }
    ]
  };

  // State for search filters
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  // Function to filter schedules
  const filterSchedules = (data, type) => {
    return data[type].filter(
      (item) =>
        (item.id.toLowerCase().includes(name.toLowerCase()) ||
          item.country.toLowerCase().includes(country.toLowerCase())) &&
        (!date || item.depDate === date)
    );
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call function to filter schedules
  };

  return (
    <AdminLayout>
      <section id="schedules" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Schedules</h2>

          {/* Search Form */}
          <form onSubmit={handleFormSubmit} className="mb-5">
            <div className="row g-3">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="search-name"
                  placeholder="Search by ID"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
               <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="search-country"
                  placeholder="Search by Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  id="search-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3 w-100">
              Filter Schedules
            </button>
          </form>

          {/* Sailing Schedule */}
          <h4>Sailing Schedule</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure Port</th>
                <th>Departure Date</th>
                <th>Arrival Port</th>
                <th>Arrival Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="sailing-schedule">
              {filterSchedules(scheduleData, "sailing").map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.depPort}</td>
                  <td>{item.depDate}</td>
                  <td>{item.arrPort}</td>
                  <td>{item.arrDate}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Airfreight Schedule */}
          <h4>Airfreight Schedule</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure Airport</th>
                <th>Departure Date</th>
                <th>Arrival Airport</th>
                <th>Arrival Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="airfreight-schedule">
              {filterSchedules(scheduleData, "airfreight").map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.depAirport}</td>
                  <td>{item.depDate}</td>
                  <td>{item.arrAirport}</td>
                  <td>{item.arrDate}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Highway Schedule */}
          <h4>Highway Schedule</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure City</th>
                <th>Departure Date</th>
                <th>Arrival City</th>
                <th>Arrival Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="highway-schedule">
              {filterSchedules(scheduleData, "highway").map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.depCity}</td>
                  <td>{item.depDate}</td>
                  <td>{item.arrCity}</td>
                  <td>{item.arrDate}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your inquiry"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}

export default Tech;
