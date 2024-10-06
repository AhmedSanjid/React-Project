import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Warehouse() {
  return (
    <AdminLayout>
    <div class="container mt-5 mb-5">
        
        <h1 class="text-center mb-4">Warehouse Booking</h1>

        
    
        
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div class="col-md-6">
                    <label for="companyName" class="form-label">Company Name</label>
                    <input type="text" class="form-control" id="companyName" placeholder="Enter company name"/>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="productDetails" class="form-label">Product Details</label>
                    <textarea class="form-control" id="productDetails" rows="2" placeholder="Enter product details"></textarea>
                </div>
                <div class="col-md-6">
                    <label for="productCategory" class="form-label">Product Category</label>
                    <input type="text" class="form-control" id="productCategory" placeholder="Enter product category"/>
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
                    <label for="invoice" class="form-label">Invoice</label>
                    <input type="text" class="form-control" id="invoice" placeholder="Enter invoice number"/>
                </div>
                <div class="col-md-6">
                    <label for="totalAmount" class="form-label">Total Amount</label>
                    <input type="number" class="form-control" id="totalAmount" placeholder="Enter total amount"/>
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

export default Warehouse;
