import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Tech() {
  return (
    <AdminLayout>
       {/* <script>
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
      { id: "trk456", country: "canada", depCity: "Toronto", depDate: "2024-09-25", arrCity: "Vancouver", arrDate: "2024-09-28", time: "3 Days" }
    ]
  };

  // Function to filter schedules
  function filterSchedules() {
    const name = document.getElementById("search-name").value.toLowerCase();
    const country = document.getElementById("search-country").value.toLowerCase();
    const date = document.getElementById("search-date").value;

    // Clear previous schedule tables
    document.getElementById("sailing-schedule").innerHTML = "";
    document.getElementById("airfreight-schedule").innerHTML = "";
    document.getElementById("highway-schedule").innerHTML = "";

    // Filter and populate the sailing schedule
    const sailingSchedule = scheduleData.sailing.filter(item => 
      (item.id.toLowerCase().includes(name) || item.country.toLowerCase().includes(country)) && 
      (!date || item.depDate === date)
    );
    sailingSchedule.forEach(item => {
      document.getElementById("sailing-schedule").innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.depPort}</td>
          <td>${item.depDate}</td>
          <td>${item.arrPort}</td>
          <td>${item.arrDate}</td>
          <td>${item.time}</td>
        </tr>`;
    });

    // Filter and populate the airfreight schedule
    const airfreightSchedule = scheduleData.airfreight.filter(item => 
      (item.id.toLowerCase().includes(name) || item.country.toLowerCase().includes(country)) && 
      (!date || item.depDate === date)
    );
    airfreightSchedule.forEach(item => {
      document.getElementById("airfreight-schedule").innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.depAirport}</td>
          <td>${item.depDate}</td>
          <td>${item.arrAirport}</td>
          <td>${item.arrDate}</td>
          <td>${item.time}</td>
        </tr>`;
    });

    // Filter and populate the highway schedule
    const highwaySchedule = scheduleData.highway.filter(item => 
      (item.id.toLowerCase().includes(name) || item.country.toLowerCase().includes(country)) && 
      (!date || item.depDate === date)
    );
    highwaySchedule.forEach(item => {
      document.getElementById("highway-schedule").innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.depCity}</td>
          <td>${item.depDate}</td>
          <td>${item.arrCity}</td>
          <td>${item.arrDate}</td>
          <td>${item.time}</td>
        </tr>`;
    });
  }
</script> */}

  
  <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your inquiry"></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>

    </AdminLayout>
  )
}

export default Tech