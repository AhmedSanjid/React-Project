import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Staff() {
  return (
    <AdminLayout>
  <body>

<div class="container my-5">
  <h2 class="mb-4">Staff's Report</h2>
  <form>
    
    <div class="mb-3">
      <label for="staffName" class="form-label">Name</label>
      <input type="text" class="form-control" id="staffName" placeholder="Enter your name" required/>
    </div>

    <div class="mb-3">
      <label for="locationName" class="form-label">Location</label>
      <input type="text" class="form-control" id="locationName" placeholder="Enter your location" required/>
    </div>

    <div class="mb-3">
      <label for="jobTitle" class="form-label">Job Title</label>
      <input type="text" class="form-control" id="jobTitle" placeholder="job title" required/>
    </div>

    <div class="mb-3">
      <label for="vehicleId" class="form-label">Vehicle ID</label>
      <input type="text" class="form-control" id="vehicleId" placeholder="vehicle id" required/>
    </div>

    <div class="mb-3">
      <label for="cargoid" class="form-label">Cargo ID</label>
      <input type="text" class="form-control" id="cargoid" placeholder="cargo id" required/>
    </div>

    <div class="mb-3">
      <label for="details" class="form-label">Details</label>
      <textarea class="form-control" id="details" rows="3" placeholder="Enter work details" required></textarea>
    </div>

    <div class="mb-3">
      <label for="staffContact" class="form-label">Contact Number</label>
      <input type="tel" class="form-control" id="staffContact" placeholder="Enter your contact number" required/>
    </div>

    <div class="mb-3">
      <label for="staffEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="staffEmail" placeholder="Enter your email" required/>
    </div>

    
    <div class="mb-3">
      <label for="photoUpload" class="form-label">Upload Photo</label>
      <input type="file" class="form-control" id="photoUpload" accept="image/*" required/>
    </div>

    <h4 class="mt-4">Second Person Info</h4>

    <div class="mb-3">
      <label for="secondPersonName" class="form-label">Name</label>
      <input type="text" class="form-control" id="secondPersonName" placeholder="Enter second person's name" required/>
    </div>

    <div class="mb-3">
      <label for="secondPersonContact" class="form-label">Contact Number</label>
      <input type="tel" class="form-control" id="secondPersonContact" placeholder="Enter second person's contact number" required/>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

</body>

    </AdminLayout>
  )
}

export default Staff