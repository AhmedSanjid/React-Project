import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Forget() {
  return (
    <AdminLayout>
  <body>
    

<div class="lost-passkey-container">
    <h2>Lost Passkey?</h2>
    <form action="reset_passkey.php" method="POST">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>
        </div>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>

        <div class="form-group">
            <label for="new_passkey">New Passkey</label>
            <input type="password" id="new_passkey" name="new_passkey" placeholder="Enter new passkey" required/>
        </div>

        <div class="form-group">
            <label for="confirm_passkey">Confirm Passkey</label>
            <input type="password" id="confirm_passkey" name="confirm_passkey" placeholder="Confirm new passkey" required/>
        </div>

        <button type="submit" class="submit-btn">Done!</button>
    </form>
</div>

</body>

    </AdminLayout>
  )
}
export default Forget