import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Track() {

  return (
    <AdminLayout>
  <header class="py-5 bg-success text-white text-center">
    <div class="container">
      <h1>Insurance Policies</h1>
      <p>Comprehensive coverage for all your transportation needs</p>
    </div>
  </header>

  
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Highway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Highway transportation insurance protects against damage to goods during road transit. This policy covers accidents, theft, and weather damage that may affect the cargo being transported by trucks or trailers.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Airway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Airway transportation insurance offers protection for cargo during air transport. This coverage ensures compensation in the event of loss or damage to the goods due to air accidents, handling errors, or delays.</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-header bg-info text-white text-center">
              <h4>Seaway Insurance</h4>
            </div>
            <div class="card-body">
              <p>Seaway insurance provides comprehensive protection for goods transported by sea. This includes coverage against piracy, rough weather, sinking, or damage during loading and unloading at ports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">File an Insurance Claim</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form>
            
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>

            
            <div class="mb-3">
              <label for="company" class="form-label">Company Name</label>
              <input type="text" class="form-control" id="company" placeholder="Enter your company name"/>
            </div>

            
            <div class="mb-3">
              <label for="product" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="product" placeholder="Enter the product name"/>
            </div>

            
            <div class="mb-3">
              <label for="weight" class="form-label">Weight (kg)</label>
              <input type="number" class="form-control" id="weight" placeholder="Enter the weight in kilograms"/>
            </div>

            
            <div class="mb-3">
              <label for="country" class="form-label">Country Name</label>
              <input type="text" class="form-control" id="country" placeholder="Enter the country name"/>
            </div>

            
            <div class="mb-3">
              <label for="destination" class="form-label">Destination</label>
              <input type="text" class="form-control" id="destination" placeholder="Enter the destination"/>
            </div>

            
            <div class="mb-3">
              <label for="productDetails" class="form-label">Product Details</label>
              <textarea class="form-control" id="productDetails" rows="3" placeholder="Provide detailed information about the product"></textarea>
            </div>

            
            <div class="mb-3">
              <label for="incident" class="form-label">Incident Details</label>
              <textarea class="form-control" id="incident" rows="3" placeholder="Describe the incident"></textarea>
            </div>

            
            <div class="mb-3">
              <label for="claim" class="form-label">Claim Description</label>
              <textarea class="form-control" id="claim" rows="3" placeholder="Describe the claim"></textarea>
            </div>

            
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
            </div>

            
            <div class="mb-3">
              <label for="bank" class="form-label">Bank Name</label>
              <input type="text" class="form-control" id="bank" placeholder="Enter your bank name"/>
            </div>

            
            <div class="mb-3">
              <label for="reference" class="form-label">Reference Name</label>
              <input type="text" class="form-control" id="reference" placeholder="Enter reference name"/>
            </div>

            
            <div class="mb-3">
              <label for="cargoSerial" class="form-label">Cargo Serial Number</label>
              <input type="text" class="form-control" id="cargoSerial" placeholder="Enter cargo serial number"/>
            </div>

            
            <div class="mb-3">
              <label for="claimPeriod" class="form-label">Claim Period</label>
              <input type="datetime-local" class="form-control" id="claimPeriod"/>
            </div>

            
            <div class="d-grid">
              <button type="submit" class="btn btn-success btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </AdminLayout>
  );
}

export default Track;
