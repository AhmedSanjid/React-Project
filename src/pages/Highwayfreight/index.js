import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Highwayfreight() {
  return (
    <AdminLayout>
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Highway Freight Booking</h1>

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
                    <label for="vehicleid" class="form-label">vehicle ID</label>
                    <input type="text" class="form-control" id="vehicleid" placeholder="ID"/>
                </div>
                <div class="col-md-6">
                    <label for="departurelocation" class="form-label">Departure Location</label>
                    <input type="text" class="form-control" id="departurelocation" placeholder="Location"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="arrivallocation" class="form-label">Arrival Location</label>
                    <input type="text" class="form-control" id="arrivallocation" placeholder="Location"/>
                </div>
                <div class="col-md-6">
                    <label for="insuranceNumber" class="form-label">Insurance Number</label>
                    <input type="text" class="form-control" id="insuranceNumber" placeholder="Enter insurance number"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="pricePerTon" class="form-label">Price per Ton</label>
                    <input type="number" class="form-control" id="pricePerTon" placeholder="Enter price per ton"/>
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
                    <label for="pricePerTon" class="form-label">Price per Ton</label>
                    <input type="number" class="form-control" id="pricePerTon" placeholder="Enter price per ton"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="tollCost" class="form-label">Toll Cost</label>
                    <input type="number" class="form-control" id="tollCost" placeholder="Enter toll cost"/>
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

export default Highwayfreight;
