import React, { useState, useEffect } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';

function Clogin() {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState([]);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }))
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		let check = await login(inputs);
		if (check) {
			window.location =process.env.REACT_APP_BASE_URL
		} else {
			alert("Sorry password or email address is wrong!");
		}
	}

  return (
    <AuthLayout>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Break The Lock!</h1>
        <form onSubmit={handleSubmit}>
      
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="username" class="form-control" id="username" name="name" placeholder="Username" onChange={handleChange}/>
                    </div>

                  
                    <div class="mb-3">
                        <label for="passkey" class="form-label">Passkey</label>
                        <input type="passkey" class="form-control" id="passkey" name="password" placeholder="insert your passkey" onChange={handleChange}/>
                    </div>

                    
                    <div class="mb-3">
                        <button type="submit" class="btn btn-info w-100">Unlock!</button>
                    </div>


                    <div class="text-center">
                    <Link to="/forget">Need Any Support</Link>
                    </div><br></br>
                    
                    <div class="text-center">
                    <p>haven't any pass?</p>
                    <Link to="/signup">press the door!</Link>
                  </div>
                </form>
            </div>
        </div>
        </form>
        </div>
    </AuthLayout>
  )
}
export default Clogin