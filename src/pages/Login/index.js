import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useLocation, Link} from 'react-router-dom';

function Login() {
  const activeMenu = (e) => {
    document.querySelectorAll('.submenu').forEach(
        function (e) {
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if (childElement && childElement.classList.contains('submenu')) {
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
  return (
    <AdminLayout>
    <div class="container mt-5">
        
        <h1 class="text-center mb-4">Break The Lock!</h1>

      
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="username" class="form-control" id="username" placeholder="Username"/>
                    </div>

                  
                    <div class="mb-3">
                        <label for="passkey" class="form-label">Passkey</label>
                        <input type="passkey" class="form-control" id="passkey" placeholder="insert your passkey"/>
                    </div>

                    
                    <div class="mb-3">
                        <button type="submit" class="btn btn-info w-100">Unlock!</button>
                    </div>

                    
                    <div class="text-center">
                    <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Forget")}`}>
                    <Link to="/Forget" className="sidebar-link">Need any support?</Link></p>
                    </div><br></br>
                    <div class="text-center">
                    <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Signup")}`}> haven't any pass?
                    <Link to="/Signup" className="sidebar-link">Press the door!</Link></p>
                  </div>
                </form>
            </div>
        </div>
    </div>

    </AdminLayout>
  )
}
export default Login