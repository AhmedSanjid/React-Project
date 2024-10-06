import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Signup() {
  return (
    <AdminLayout>
    <div class="container mt-5">
        
        <h1 class="text-center mb-4">Create Your Passkey!</h1>

        
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
                    </div>

                    
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                    </div>

                    
                    <div class="mb-3">
                        <label for="passkey" class="form-label">Passkey</label>
                        <input type="password" class="form-control" id="passkey" placeholder="Enter your passkey"/>
                    </div>

                    
                    <div class="mb-3">
                        <label for="confirmPasskey" class="form-label">Confirm Passkey</label>
                        <input type="password" class="form-control" id="confirmPasskey" placeholder="Confirm your passkey"/>
                    </div>

                    
                    <div class="mb-3">
                        <button type="submit" class="btn btn-info w-100">Sign Up</button>
                    </div>
                    <div class="text-center">
                      <p>Already have Passkey? <a href="http://127.0.0.1:3000/Login#">Break here!</a></p>
                  </div>
                </form>
            </div>
        </div>
    </div>

    </AdminLayout>
  )
}
export default Signup