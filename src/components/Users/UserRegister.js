// import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';
// import axios from "axios";


// const UserRegister = (props) => {
//     const history = useHistory();

//     const [user, setUser] = useState({
//       userId:0,
//       userPassword: '',
//       userName: ''
        
//     });
//     const [oneUser, setOneUser] = useState({
//         userId:0,
//         userPassword: '',
//         userName: ''
//     });

//     const handleUserData = (evt) => {
//         console.log("handleUserData", evt.target.name, evt.target.value);
//         setUser({
//             ...user,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     const submitRegisterUser = (evt) => {
//         console.log("submitRegisterUser");
//         axios.post('http://localhost:8082/UserRegistration', user)
//             .then((response) => {
//                 setOneUser(response.data);

//                 alert(`User Registered successfully!`)
//                 history.push('/home');
//             }).catch(error => {
//                 alert('Enter Correct Details!');
//             });
//         evt.preventDefault();
//     }

   

//     return (
//         <div className="container" >
//             <div>
                
//                 <form className="form form-group row" onSubmit={submitRegisterUser} >
//                     <div>
//                     {/* <p>Staff ID</p>
//                     <input
//                             type="number"
//                             id="staffId"
//                             name="staffId"
//                             className="form-control mb-3"
//                             placeholder="Staff Id"
//                             onChange={handleStaffData}
//                         /> */}
//                                                 <p>User Name</p>
//                         <input
//                             type="text"
//                             id="userName"
//                             name="userName"
//                             className="form-control mb-3"
//                             placeholder="User Name"
//                             onChange={handleUserData}
//                         />
//                         <p>User Password</p>
//                         <input
//                             type="text"
//                             id="userPassword"
//                             name="userPassword"
//                             className="form-control mb-3"
//                             placeholder="User Password"
//                             onChange={handleUserData}
//                         />
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="btn btn-primary mb-3"
//                             value="Register"
//                         />
//                     </div>
//                 </form>
               
//                 {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
//             </div>
//            </div> 
//     );
// }
// export default UserRegister;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from "axios";


const UserRegister = (props) => {
    const history = useHistory();
    const [userList, setuserList] = useState([]);
    const [user, setUser] = useState({
      userId:0,
      userPassword: '',
      userName: ''
        
    });
    const [oneUser, setOneUser] = useState({
        userId:0,
        userPassword: '',
        userName: ''
    });

    const handleUserData = (evt) => {
        console.log("handleUserData", evt.target.name, evt.target.value);
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        });
    }

    const submitRegisterUser = (evt) => {
        console.log("submitRegisterUser");
        axios.post('http://localhost:8082/UserRegistration', user)
            .then((response) => {
                setOneUser(response.data);

                alert(`User Registered successfully!`)
                // history.push('/home');
            }).catch(error => {
                alert('Enter Correct Details!');
            });
        evt.preventDefault();
    }



    const myUserId = (evt) => {
        console.log(user.userId);
        axios.get(`http://localhost:8082/user/getAllUsers`)
            .then((response) => {
                let result = [];
                let data = response.data;
                let res =data.find(us => us.userName === user.userName);
                result.push(res)
                setuserList(result);
                console.log(userList)
            }).catch(error => {
                alert("User ID does not exist!");
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                
                <form className="form form-group row" onSubmit={submitRegisterUser} >
                    <div>
                    {/* <p>Staff ID</p>
                    <input
                            type="number"
                            id="staffId"
                            name="staffId"
                            className="form-control mb-3"
                            placeholder="Staff Id"
                            onChange={handleStaffData}
                        /> */}
                                                <p>User Name</p>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="form-control mb-3"
                            placeholder="User Name"
                            onChange={handleUserData}
                        />
                        <p>User Password</p>
                        <input
                            type="text"
                            id="userPassword"
                            name="userPassword"
                            className="form-control mb-3"
                            placeholder="User Password"
                            onChange={handleUserData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Register"
                        />
                    </div>
                </form>
                <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="show"
                            onClick={myUserId}
                        />
                        <table class="table table-hover table-secondary table-stripped">
                        <thead>
                            <tr>
                                <th scope="col">USERNAME</th>
                                <th scope="col">USER ID</th>

                            </tr>
                        </thead>
                        <tbody>
                           
                                {userList.map((r, k) => {
                                    console.log(r);
                                    return (

                                        <tr k={k}>

                                            <th scope="row">{r.userId}</th>
                                            <td>{r.userName}</td>
                                        
                                        </tr>
                                    )
                                })}
                            
                        </tbody>
                    </table>
                    
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
           </div> 
    );
}
export default UserRegister;