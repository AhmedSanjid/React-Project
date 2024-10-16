import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
function Staff() {
  const [inputs, setInputs] = useState({ id: '', name: '', location: '', title: '', vehicle: '', contact_number: '', email: '', photo: '',});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/staffs/${id}`).then(function (response) {
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
                apiurl =`/staffs/edit/${inputs.id}`;
            } else {
                apiurl =`/staffs/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/staffs')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  <body>
<div class="container mt-5 mb-5" >
  <form> 
    <div class="mb-3">
      <label for="staffName" class="form-label">Name</label>
      <input type="text" class="form-control" name="name" onSubmit={handleSubmit} id="staffname" placeholder="Enter your name" required/>
    </div>
    <div class="mb-3">
      <label for="location" class="form-label">Location</label>
      <input type="text" class="form-control" name="location" onSubmit={handleSubmit} id="location" placeholder="Enter your location" required/>
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">Job Title</label>
      <input type="text" class="form-control" name="title" onSubmit={handleSubmit} id="title" placeholder="job title" required/>
    </div>
    <div class="mb-3">
      <label for="vehicle" class="form-label">Vehicle ID</label>
      <input type="text" class="form-control" name="vehicle" onSubmit={handleSubmit} id="vehicle" placeholder="vehicle id" required/>
    </div>
    <div class="mb-3">
      <label for="cargo" class="form-label">Cargo ID</label>
      <input type="text" class="form-control" name="cargo" onSubmit={handleSubmit} id="cargoid" placeholder="cargo" required/>
    </div>
    <div class="mb-3">
      <label for="details" class="form-label">Details</label>
      <textarea class="form-control" name="details" onSubmit={handleSubmit} id="details" rows="3" placeholder="Enter work details" required></textarea>
    </div>
    <div class="mb-3">
      <label for="contactnumber" class="form-label">Contact Number</label>
      <input type="tel" class="form-control" name="contactnumber" onSubmit={handleSubmit} id="contactnumber" placeholder="Enter your contact number" required/>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" name="email" onSubmit={handleSubmit}id="email" placeholder="Enter your email" required/>
    </div>
    <div class="mb-3">
      <label for="photo" class="form-label">Upload Photo</label>
      <input type="file" class="form-control" name="photo" onSubmit={handleSubmit} id="photo" accept="image/*" required/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</body>
    </AdminLayout>
  )
}

export default Staff