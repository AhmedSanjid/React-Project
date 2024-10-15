import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Sailingfreight() {
  return (
    <AdminLayout>
    
    <div class="container mt-5 mb-5 ">
        
        <h1 class="text-center mb-4">Sailing Freight Booking</h1>
        <div class="row mb-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type class="form-control" id="name" placeholder="Name"/>
                </div>
                <div class="col-md-6">
                    <label for="companyname" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="companyname" placeholder="Company Name"/>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="shipname" class="form-label">Ship Name</label>
                    <input type="text" class="form-control" id="shipname" placeholder="Ship Name"/>
                </div>
                <div class="col-md-6">
                    <label for="arrivalport" class="form-label">Arrival Port</label>
                    <input type="text" class="form-control" id="arrivalport" placeholder="Port Name"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="insurancenumber" class="form-label">Insurance Number</label>
                    <input type="text" class="form-control" id="insurancenumber" placeholder="Number"/>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter price"/>
                </div>
                <div class="col-md-6">
                    <label for="totalAmount" class="form-label">Total Amount</label>
                    <input type="number" class="form-control" id="totalAmount" placeholder="Enter total amount"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productWeight" class="form-label">Product Weight (kg)</label>
                    <input type="number" class="form-control" id="productWeight" placeholder="Enter product weight"/>
                </div>
                <div class="col-md-6">
                    <label for="containerSerial" class="form-label">Container Serial Number</label>
                    <input type="text" class="form-control" id="containerSerial" placeholder="Enter container serial number"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="shippingCost" class="form-label">Shipping Cost</label>
                    <input type="number" class="form-control" id="shippingCost" placeholder="Enter shipping cost"/>
                </div>
                <div class="col-md-6">
                    <label for="tax" class="form-label">Tax</label>
                    <input type="number" class="form-control" id="tax" placeholder="Enter tax amount"/>
                </div>
            </div>

            
            <div class="row">
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                </div>
                <div class="col-md-6">
                    <button type="button" class="btn btn-secondary w-100">Edit</button>
                </div>
            </div>
        </div>
    </AdminLayout>
  );
}

export default Sailingfreight;
