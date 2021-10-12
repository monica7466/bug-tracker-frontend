import React from 'react';
import { useHistory } from 'react-router';

const RegisterPage = () => {
 
    const history = useHistory();
 
    const UserRegister= (event) => {
 
        history.push('/userRegister');
 
        event.preventDefault();
    }

    return (
        <div className = "container">
            <h1 className="font2">Register</h1>
             
            <p className="display-8 text-primary">Please Register</p>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={UserRegister}>USER</button>
            
            
            </div>
       
    )
}

export default RegisterPage;