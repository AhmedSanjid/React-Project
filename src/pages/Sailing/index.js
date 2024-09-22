import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const scheduleData = {
  sailing: [
    { id: 'Pacific', country: 'USA', depPort: 'Los Angeles', depDate: '2024-09-18', arrPort: 'Yokohama', arrDate: '2024-10-05', time: '17 Days' },
    { id: 'Atlantic Voyager', country: 'USA', depPort: 'New York', depDate: '2024-09-21', arrPort: 'Rotterdam', arrDate: '2024-10-04', time: '13 Days' },
    { id: 'TIARA123', country: 'Bangladesh', depPort: 'Mongla', depDate: '2024-09-25', arrPort: 'Tokyo Harbor', arrDate: '2024-10-06', time: '15 Days' },
    { id: 'Ruler Ship', country: 'Germany', depPort: 'Rohetdam', depDate: '2024-09-18', arrPort: 'port Busan', arrDate: '2024-10-07', time: '14 Days' },
    { id: 'Barbadose', country: 'USA', depPort: 'New York', depDate: '2024-09-21', arrPort: 'Rotterdam', arrDate: '2024-10-04', time: '13 Days' },
    { id: 'Black Flag', country: 'Bangladesh', depPort: 'Chittagong', depDate: '2024-09-28', arrPort: 'Port of Kobe', arrDate: '2024-10-01', time: '11 Days' },
  ],
  airfreight: [
 { id: 'AA789', country: 'USA', depAirport: 'JFK, New York', depDate: '2024-09-22', arrAirport: 'Heathrow, London', arrDate: '2024-09-22', time: '7 Hours' },
    { id: 'ABC456', country: 'Germany', depAirport: 'FRA, Frankfurt', depDate: '2024-09-29', arrAirport: 'LAX, Los Angeles', arrDate: '2024-09-30', time: '12 Hours' },
 { id: 'BB123', country: 'USA', depAirport: 'JFK, New York', depDate: '2024-09-22', arrAirport: 'Heathrow, London', arrDate: '2024-09-22', time: '9 Hours' },
{ id: 'DEF789', country: 'Scotland', depAirport: 'Glasgow airport', depDate: '2024-09-25', arrAirport: 'ZIA airport', arrDate: '2024-09-26', time: '18 Hours' },
    { id: 'CC456', country: 'Belgium', depAirport: 'Brussels Airport', depDate: '2024-09-28', arrAirport: 'Oslo airport', arrDate: '2024-09-29', time: '14 Hours' },
 { id: 'ABC789', country: 'Norway', depAirport: 'Oslo Airport', depDate: '2024-09-29', arrAirport: 'Haneda Airport', arrDate: '2024-09-30', time: '10 Hours' },
 { id: 'DD007', country: 'Bangladesh', depAirport: 'Zia Airport', depDate: '2024-09-25', arrAirport: 'Fukuoka Airport', arrDate: '2024-09-22', time: '9 Hours' },
    { id: 'ABC007', country: 'Bangladsh', depAirport: 'Osmani international Airport', depDate: '2024-09-28', arrAirport: 'LAX, Los Angeles', arrDate: '2024-09-29', time: '12 Hours' },
  ],
  highway: [
    { id: 'TRK123', country: 'Bangladesh', depCity: 'Chittagong', depDate: '2024-09-20', arrCity: 'Dellhi', arrDate: '2024-09-21', time: '1 Day' },
 { id: 'TRK789', country: 'pakistan', depCity: 'korachi', depDate: '2024-09-25', arrCity: 'Xinjiang', arrDate: '2024-09-28', time: '3 Days' },
    { id: 'TRK456', country: 'Nepal', depCity: 'Pokhara', depDate: '2024-09-28', arrCity: 'Chittagong', arrDate: '2024-10-4', time: '7 Day' },
 { id: 'TRK012', country: 'Bhutan', depCity: 'Paro', depDate: '2024-09-22', arrCity: 'Pokhara', arrDate: '2024-09-25', time: '3 Days' },
  { id: 'TRK013', country: 'Bangladesh', depCity: 'Chittagong', depDate: '2024-09-28', arrCity: 'Paro', arrDate: '2024-09-30', time: '3 Day' },
    { id: 'TRK014', country: 'pakistan', depCity: 'korachi', depDate: '2024-09-29', arrCity: 'Dhaka', arrDate: '2024-09-30', time: '2 Days' },
  { id: 'TRK015', country: 'Mayanmar', depCity: 'Yangon', depDate: '2024-09-20', arrCity: 'Mumbai', arrDate: '2024-09-21', time: '1 Day' },
  { id: 'TRK016', country: 'India', depCity: 'Haydrabad', depDate: '2024-09-25', arrCity: 'Korachi', arrDate: '2024-09-27', time: '2 Days' },
  ],
};

function Sailing() {
 const [date, setDate] = useState('');

 
  const formatDateToDDMMYYYY = (dateStr) => {
const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  const filterSchedules = () => {
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
        <th>ID</th>     <th>Departure Port</th>
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
          </table>  </div>

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