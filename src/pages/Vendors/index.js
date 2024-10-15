import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Vendors() {
  return (
    <AdminLayout>
  <div class="container my-5">
    <h2 class="mb-4">Vendor Member's Report</h2>
    <form>
    
      <div class="mb-3">
        <label for="vendorName" class="form-label">Name</label>
        <input type="text" class="form-control" id="vendorName" placeholder="Enter your name" required/>
      </div>

      <div class="mb-3">
        <label for="designation" class="form-label">Designation</label>
        <input type="text" class="form-control" id="designation" placeholder="Enter your designation" required/>
      </div>

      <div class="mb-3">
        <label for="workStatus" class="form-label">Work Status</label>
        <input type="text" class="form-control" id="workStatus" placeholder="Enter your work status" required/>
      </div>

      <div class="mb-3">
        <label for="details" class="form-label">Details</label>
        <textarea class="form-control" id="details" rows="3" placeholder="Enter work details" required></textarea>
      </div>

      <div class="mb-3">
        <label for="vendorContact" class="form-label">Contact Number</label>
        <input type="tel" class="form-control" id="vendorContact" placeholder="Enter your contact number" required/>
      </div>

      <div class="mb-3">
        <label for="vendorEmail" class="form-label">Email</label>
        <input type="email" class="form-control" id="vendorEmail" placeholder="Enter your email" required/>
      </div>

      
      <div class="mb-3">
        <label for="photoUpload" class="form-label">Upload Photo</label>
        <input type="file" class="form-control" id="photoUpload" accept="image/*" required/>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

    </AdminLayout>
  )
}

export default Vendors