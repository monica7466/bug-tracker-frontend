import React from 'react';
import { useHistory } from 'react-router';
// import AddBug from './AddBug';
 
const LoginPage = () => {
 
    const history = useHistory();
 
    const AdminLogin = (event) => {
 
        history.push('/adminLogin');
 
        event.preventDefault();
    }

    const StaffLogin = (event) => {
 
        history.push('/staffLogin');
 
        event.preventDefault();
    }

    const UserLogin = (event) => {
 
        history.push('/userLogin');
 
        event.preventDefault();
    }

    return (
        <div className = "container">
            <h1 className="font2">Login</h1>
             
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={AdminLogin}>ADMIN</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={StaffLogin}>STAFF</button>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={UserLogin}>USER</button>
            
            
            </div>
       
    )
}
 
export default LoginPage;