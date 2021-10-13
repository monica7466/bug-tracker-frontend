// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import AdminDashboard from './admin/AdminDashboard';
// import Staff from './admin/Staff';
// import StaffDashboard from './staff/StaffDashboard';

// const CustomHeader = () => {

//     return (
//         <div>
//             <header className="header sticky-top">
//                 <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
//                 <h4 className="navbar navbar-light">Welcome</h4>
//                     <div className="container">

//                         <Link className="navbar-brand" to="/home">
//                             <img src="https://www.pikpng.com/pngl/b/140-1404779_tracking-and-fixing-bugs-is-no-more-a.png"
//                                 height="50px" alt="Bug" />
//                         </Link>
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse navbar-dark" id="navbarResponsive">
//                             <ul className="navbar-nav ml-auto">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/about">About us</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/contact">Contact</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/home">Logout</Link>
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//             </header>
//             {/* <AdminDashboard /> */}
//             {/* <StaffDashboard/> */}
//         </div>
//     );

// }
// export default CustomHeader;

import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

const CustomHeader = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        
        if (isLoggedIn); // use localStorage here 
        setIsLoggedIn(false);
    }, []);

    if (isLoggedIn) {
        return (
            <header className="header sticky-top">
                <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-primary bg-primary">
                    <h4 className="navbar navbar-light">Welcome</h4>
                    <div className="container">

                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.pikpng.com/pngl/b/140-1404779_tracking-and-fixing-bugs-is-no-more-a.png"
                                height="50px" alt="Bug" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-dark" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );

    }
    else {
        return (
            <header class="header sticky-top">
                <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-primary">
                    <div class="container">
                        <Link className="navbar-brand" to="/home">
                            <img src="https://www.pikpng.com/pngl/b/140-1404779_tracking-and-fixing-bugs-is-no-more-a.png"
                                height="50px" alt="Bug" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>

                                <li className="nav-item align-end">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }



}
export default CustomHeader;

// class CustomHeader extends React.Component {  
//     componentWillMount() {
//       if (sessionStorage.getItem('jwt'))
//         this.props.loginSuccess();
//     }
  
//     render() {
//       console.log("logged_in: ", this.props.logged_in);
  
//       if (this.props.logged_in) {
//         return (
//           <nav>
//             <NavLink to="/" 
//               activeClassName="active">Home</NavLink>
//             {" | "}
//             <Link to="/products" activeClassName="active">Products</Link>
//             {" | "}
//             <a href="/logout">log out</a>
//           </nav>
//         );
//       } else {
//         return (
//           <nav>
//             <NavLink to="/" 
//               activeClassName="active">Home</NavLink>
//             {" | "}
//             <Link to="/userLogin" activeClassName="active">
//               log in</Link>
//           </nav>
//         );
//       }
//     }
//   }
//   export default CustomHeader;