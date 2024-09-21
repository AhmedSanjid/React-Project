import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const scheduleData = {
  sailing: [
    { id: 'Pacific', country: 'USA', depPort: 'Los Angeles', depDate: '2024-09-18', arrPort: 'Yokohama', arrDate: '2024-10-05', time: '17 Days' },
    { id: 'Atlantic Voyager', country: 'USA', depPort: 'New York', depDate: '2024-09-21', arrPort: 'Rotterdam', arrDate: '2024-10-04', time: '13 Days' },
  ],
  airfreight: [
    { id: 'AA789', country: 'USA', depAirport: 'JFK, New York', depDate: '2024-09-22', arrAirport: 'Heathrow, London', arrDate: '2024-09-22', time: '7 Hours' },
    { id: 'LH654', country: 'Germany', depAirport: 'FRA, Frankfurt', depDate: '2024-09-25', arrAirport: 'LAX, Los Angeles', arrDate: '2024-09-25', time: '12 Hours' },
  ],
  highway: [
    { id: 'TRK-123', country: 'USA', depCity: 'Chicago', depDate: '2024-09-20', arrCity: 'Dallas', arrDate: '2024-09-21', time: '1 Day' },
    { id: 'TRK456', country: 'Canada', depCity: 'Toronto', depDate: '2024-09-25', arrCity: 'Vancouver', arrDate: '2024-09-28', time: '3 Days' },
  ],
};

function Sailing() {
  const [date, setDate] = useState('');

  // Helper function to convert date to dd-mm-yyyy format
  const formatDateToDDMMYYYY = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  // Function to filter schedules
  const filterSchedules = () => {
    // Filter logic here
    const filter = (item) => (!date || formatDateToDDMMYYYY(item.depDate) === date);

    const filteredSailing = scheduleData.sailing.filter(filter);
    const filteredAirfreight = scheduleData.airfreight.filter(filter);
    const filteredHighway = scheduleData.highway.filter(filter);

    return { sailing: filteredSailing, airfreight: filteredAirfreight, highway: filteredHighway };
  };

  const { sailing, airfreight, highway } = filterSchedules();

  return (
    <AdminLayout>
      <div className="container py-5 text-center">
        <div className="mb-4">
          <h1>Find your schedules</h1>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Enter Date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3>Sailing Schedule</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure Port</th>
                <th>Departure Date</th>
                <th>Arrival Port</th>
                <th>Arrival Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {sailing.length ? (
                sailing.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.depPort}</td>
                    <td>{formatDateToDDMMYYYY(item.depDate)}</td>
                    <td>{item.arrPort}</td>
                    <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
                    <td>{item.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Sailing Schedule Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-5">
          <h3>Airfreight Schedule</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure Airport</th>
                <th>Departure Date</th>
                <th>Arrival Airport</th>
                <th>Arrival Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {airfreight.length ? (
                airfreight.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.depAirport}</td>
                    <td>{formatDateToDDMMYYYY(item.depDate)}</td>
                    <td>{item.arrAirport}</td>
                    <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
                    <td>{item.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Airfreight Schedule Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mb-5">
          <h3>Highway Schedule</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Departure City</th>
                <th>Departure Date</th>
                <th>Arrival City</th>
                <th>Arrival Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {highway.length ? (
                highway.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.depCity}</td>
                    <td>{formatDateToDDMMYYYY(item.depDate)}</td>
                    <td>{item.arrCity}</td>
                    <td>{formatDateToDDMMYYYY(item.arrDate)}</td>
                    <td>{item.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Highway Schedule Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

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

export default Sailing;