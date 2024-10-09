import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Airfreight() {
  return (
    <AdminLayout>
    
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Air Freight Booking</h1>

        <form>
            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productDetails" class="form-label">Product Details</label>
                    <textarea class="form-control" id="productDetails" rows="2" placeholder="Enter product details"></textarea>
                </div>
                <div class="col-md-6">
                    <label for="planeName" class="form-label">Flight number</label>
                    <input type="text" class="form-control" id="planeName" placeholder="Enter plane name"/>
                </div>
            </div>

            
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="departureAirport" class="form-label">Departure Airport</label>
                    <input type="text" class="form-control" id="departureAirport" placeholder="Enter departure airport name"/>
                </div>
                <div class="col-md-6">
                    <label for="arrivalAirport" class="form-label">Arrival Airport</label>
                    <input type="text" class="form-control" id="arrivalAirport" placeholder="Enter arrival airport name"/>
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
                    <label for="pricePerCargo" class="form-label">Price per Cargo</label>
                    <input type="number" class="form-control" id="pricePerCargo" placeholder="Enter price per cargo"/>
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
                    <label for="containerSerial" class="form-label">Cargo Serial Number</label>
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
        </form>
    </div>
    </AdminLayout>
  );
}

export default Airfreight;
