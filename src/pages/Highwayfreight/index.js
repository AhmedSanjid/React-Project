import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Highwayfreight() {
  return (
    <AdminLayout>
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Highway Freight Booking</h1>

        
    
            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productDetails" class="form-label">Product Details</label>
                    <textarea class="form-control" id="productDetails" rows="2" placeholder="Enter product details"></textarea>
                </div>
                <div class="col-md-6">
                    <label for="vehicleName" class="form-label">Vehicle Name</label>
                    <input type="text" class="form-control" id="vehicleName" placeholder="Enter vehicle name"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="departureLocation" class="form-label">Departure Location</label>
                    <input type="text" class="form-control" id="departureLocation" placeholder="Enter departure location"/>
                </div>
                <div class="col-md-6">
                    <label for="arrivalLocation" class="form-label">Arrival Location</label>
                    <input type="text" class="form-control" id="arrivalLocation" placeholder="Enter arrival location"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="insuranceNumber" class="form-label">Insurance Number</label>
                    <input type="text" class="form-control" id="insuranceNumber" placeholder="Enter insurance number"/>
                </div>
                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email"/>
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
                    <label for="vehicleSerial" class="form-label">Vehicle Serial Number</label>
                    <input type="text" class="form-control" id="vehicleSerial" placeholder="Enter vehicle serial number"/>
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
