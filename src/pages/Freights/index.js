import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Freight() {
  const [inputs, setInputs] = useState({ id: '', customer_id: '', total_amount: '', vat: '', payment_method: '', shipment_type: '', pickup_time: '', delivery_time: '', total_qty: '',pickup_location: '',delivery_location: '', transport_type_id: ''});
  const navigate = useNavigate();
  const { id } = useParams();

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/freights/${id}`).then(function (response) {
          setInputs(response.data.data);
      });
  }

  useEffect(() => {
      if (id) {
          getDatas();
      }
  }, []);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputs)

      try {
          let apiurl = '';
          if (inputs.id != '') {
              apiurl =`/freights/edit/${inputs.id}`;
          } else {
              apiurl =`/freights/create`;
          }

          let response = await axios({
              method: 'post',
              responsiveType: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs
          });
          navigate('/freights')
      }
      catch (e) {
          console.log(e);
        }
      }
  return (
    <AdminLayout>

<div class="container my-5">
    <h2 class="text-center mb-4">Shipment Order Form</h2>
    <form onSubmit={handleSubmit}>
      
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Company Information</legend>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="customer_id" class="form-label">Company Name</label>
            <input defaultValue={inputs.customer_id} name="customer_id" onChange={handleChange} type="text" id="customer_id" className="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="contactPerson" class="form-label">Contact Person</label>
            <input type="text" class="form-control" id="contactPerson" placeholder="Enter contact person's name" required/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email address" required/>
          </div>
          <div class="col-md-6">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input type="text" class="form-control" id="phoneNumber" placeholder="Enter phone number" required/>
          </div>
        </div>
        <div class="mb-3">
          <label for="companyAddress" class="form-label">Company Address</label>
          <input type="text" class="form-control" id="companyAddress" placeholder="Enter company address" required/>
        </div>
      </fieldset>

  
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Shipment Details</legend>
        <div class="row mb-3">
          <div class="col-md-6">
          <label for="shipment_type" class="form-label">Shipment Type</label>
             <select defaultValue={inputs.shipment_type} onChange={handleChange} name="shipment_type" className='form-control'> 
              <option value="">Select One</option>
              <option value="airfreight">Air Freight</option>
              <option value="sea">Sailing Freight</option>
              <option value="road">Highway Freight</option>
              </select>
          </div>
          <div class="col-md-6">
            <label for="cargoDescription" class="form-label">Cargo Description</label>
            <input type="text" class="form-control" id="cargoDescription" placeholder="Enter cargo description" required/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4">
            <label for="weight" class="form-label">Weight/Volume</label>
            <input type="text" class="form-control" id="weight" placeholder="Enter weight/volume" required/>
          </div>
          <div class="col-md-4">
            <label for="containerUnits" class="form-label">Number of Containers/Units</label>
            <input type="number" class="form-control" id="containerUnits" placeholder="Enter number of containers/units" required/>
          </div>
          <div class="col-md-4">
            <label for="dimensions" class="form-label">Dimensions (optional)</label>
            <input type="text" class="form-control" id="dimensions" placeholder="Height x Width x Length"/>
          </div>
        </div>
      </fieldset>

      
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Pickup and Delivery Information</legend>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="pickup_location" class="form-label">Pickup Location</label>
            <input defaultValue={inputs.pickup_location} name="pickup_location" onChange={handleChange} type="text" id="pickup_location" className="form-control" required />
            </div>
            <div class="col-md-6">
            <label for="total_qty" class="form-label">Total Quantity</label>
            <input defaultValue={inputs.total_qty} name="total_qty" onChange={handleChange} type="text" id="total_qty" className="form-control" required />
            </div>
          </div>
          <div class="row mb-3">
          <div class="col-md-6">
            <label for="pickup_time" class="form-label">Pickup Date/Time</label>
            <input defaultValue={inputs.pickup_time} name="pickup_time" onChange={handleChange} type="text" id="pickup_time" className="form-control" required />
          </div>
          <div class="col-md-6">
          <label for="total_qty" class="form-label">Select Transport</label>
          <select defaultValue={inputs.transport_type_id} onChange={handleChange} name="transport_type_id" className='form-control'> 
            <option value="">Select One</option>
            <option value="creditCard">Air</option>
            <option value="bankTransfer">Sailing</option>
            <option value="creditCard">Highway</option>
          </select>
            </div>
          </div>
        
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="delivery_location" class="form-label">Delivery Location</label>
            <input defaultValue={inputs.delivery_location} name="delivery_location" onChange={handleChange} type="text" id="delivery_location" className="form-control" required />
          </div>
          <div class="col-md-6">
            <label for="delivery_time" class="form-label">Delivery Date/Time</label>
            <input defaultValue={inputs.delivery_time} name="delivery_time" onChange={handleChange} type="text" id="delivery_time" className="form-control" required />
          </div>
        </div>
      </fieldset>

      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Special Handling</legend>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="hazardousMaterials"/>
          <label class="form-check-label" for="hazardousMaterials">Hazardous Materials</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="temperatureControlled"/>
          <label class="form-check-label" for="temperatureControlled">Temperature Controlled</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="fragile"/>
          <label class="form-check-label" for="fragile">Fragile</label>
        </div>
      </fieldset>

      
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Customs and Insurance</legend>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="exportDocs"/>
          <label class="form-check-label" for="exportDocs">Export Documentation Required</label>
        </div>
        <div class="mb-3">
          <label for="hsCode" class="form-label">HS Code (optional)</label>
          <input type="text" class="form-control" id="hsCode" placeholder="Enter HS Code"/>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="insuranceRequired"/>
          <label class="form-check-label" for="insuranceRequired">Insurance Required</label>
        </div>
        <div class="mb-3">
          <label for="insuranceValue" class="form-label">Insurance Value (if required)</label>
          <input type="number" class="form-control" id="insuranceValue" placeholder="Enter insurance value"/>
        </div>
      </fieldset>

      
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Payment Information</legend>
        <div class="mb-3">
          <label for="payment_method" class="form-label">Payment Method</label>
          <select defaultValue={inputs.payment_method} onChange={handleChange} name="payment_method" className='form-control'> 
            <option value="">Select payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
        </select>
        </div>
        <div class="container mt-5">
            <div class="mb-3">
              <label for="vat" class="form-label text-center">VAT Percentage</label>
              <div class="input-group col-md-6">
              <input defaultValue={inputs.vat} name="vat" onChange={handleChange} type="text" id="vat" className="form-control" required />
                <span class="input-group-text">%</span>
              </div>
            </div>
        </div>
        <div class="mb-3">
          <label for="total_amount" class="form-label">Total Amount</label>
          <input defaultValue={inputs.total_amount} name="total_amount" onChange={handleChange} type="text" id="total_amount" className="form-control" required />
        </div>
      </fieldset>

      
      <fieldset class="border p-4 mb-4">
        <legend class="w-auto px-2">Additional Notes and Agreement</legend>
        <div class="mb-3">
          <label for="specialInstructions" class="form-label">Special Instructions (optional)</label>
          <textarea class="form-control" id="specialInstructions" rows="4" placeholder="Enter any special instructions"></textarea>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="agreeTerms" required/>
          <label class="form-check-label" for="agreeTerms">I agree to the terms and conditions</label>
        </div>
      </fieldset>

    
      <div class="text-center">
        <button type="submit" class="btn btn-primary">Submit Order</button>
      </div>
    </form>
  </div>

    </AdminLayout>
  )
}

export default Freight