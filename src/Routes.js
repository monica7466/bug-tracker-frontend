import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import AddBug from './components/AddBug';
import AdminDashboard from './components/admin/AdminDashboard';
import Bug from './components/Users/Bug';
import Bugs from './components/admin/Bugs';
import Messages from './components/Users/Messages';
import Message from './components/admin/Message';
import Project from './components/admin/Project';
import ProjectReport from './components/Users/ProjectReport';
import Report from './components/admin/Report';
import Staff from './components/admin/Staff';
import Staffs from './components/staff/Staffs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Projects from './components/staff/Projects';
import Reports from './components/staff/Reports';
import CustomHeader from './components/CustomHeader';
import StaffDashboard from './components/staff/StaffDashboard';
import UserDashboard from './components/Users/UserDashboard';
import SearchStaffById from './components/admin/SearchStaffById';
import UpdateStaff from './components/admin/UpdateStaff';
import AddMessage from './components/admin/AddMessage';
import DeleteStaff from './components/admin/DeleteStaff';
import AddProject from './components/admin/AddProject';
import GetAllProject from './components/admin/GetAllProject';
import SearchProject from './components/admin/SearchProject';
import UpdateProject from './components/admin/UpdateProject';
import DeleteProject from './components/admin/DeleteProject';
import AddStaff from './components/admin/AddStaff';
import GetAllStaff from './components/admin/GetAllStaff';
import AddReport from './components/staff/AddReport';
import DeleteReport from './components/staff/DeleteReport';
import GetAllReport from './components/staff/GetAllReport';
import SearchReport from './components/staff/SearchReport';
import UpdateReport from './components/staff/UpdateReport';
import DeleteBug from './components/Users/DeleteBug';
import UpdateBug from './components/Users/UpdateBug';
const Routes = () => {
    return(
        <div>
            <Router>
                {/* <div> */}
                    {/* <CustomHeader/> */}
                    {/* <div>
                        <Switch>
                            <Route path="/adminDashboard"><AdminDashboard/></Route>
                            <Route path="/about"><AboutUs/></Route>
                            <Route path="/bugs"><Bugs/></Route>
                            <Route path="/message"><Message/></Route>
                            <Route path="/staff"><Staff/></Route>
                            <Route path="/project"><Project/></Route>
                            <Route path="/report"><Report/></Route>
                            <Route path="/UpdateStaff"><UpdateStaff/></Route>
                            <Route path="/addMessage"><AddMessage/></Route>
                            <Route path="/deleteStaff"><DeleteStaff/></Route>
                            <Route path="/SearchStaffById"><SearchStaffById/></Route>
                        </Switch>
                    </div>
                    </div> */}
                <div>
                   <Header/>
                    <div>
                    <Switch>
                           <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/about"><AboutUs/></Route>
                            <Route path="/addBug"><AddBug/></Route>
                            <Route path="/staff"><Staff/></Route>
                            <Route path="/project"><Project/></Route>
                            <Route path="/report"><Report/></Route>
                            <Route path="/staffs"><Staffs /></Route>
                            <Route path="/projects"><Projects /></Route>
                            <Route path="/reports"><Reports /></Route>
                            <Route path="/bug"><Bug/></Route>
                            <Route path="/messages"><Messages/></Route>
                            {/* <Route path="/customHeader"><CustomHeader/></Route> */}
                            <Route path="/projectReport"><ProjectReport/></Route>
                            <Route path="/addReport"><AddReport/></Route>
                            <Route path="/deleteReport"><DeleteReport/></Route>
                            <Route path="/getAllReport"><GetAllReport/></Route>
                            <Route path="/updateReport"><UpdateReport/></Route>                     
                            <Route path="/searchReport"><SearchReport/></Route>
                            <Route path="/staffDashboard"><StaffDashboard/></Route>
                            <Route path="/userDashboard"><UserDashboard/></Route>
                            <Route path="/addProject"><AddProject/></Route>
                            <Route path="/searchProject"><SearchProject/></Route>
                            <Route path="/getAllProject"><GetAllProject/></Route>
                            <Route path="/updateProject"><UpdateProject/></Route>
                            <Route path="/deleteProject"><DeleteProject/></Route>
                            <Route path="/addStaff"><AddStaff/></Route>
                            <Route path="/getAllStaff"><GetAllStaff/></Route>
                            <Route path="/adminDashboard"><AdminDashboard/></Route>
                            <Route path="/about"><AboutUs/></Route>
                            <Route path="/adminDashboard/bugs"><Bugs/></Route>
                            <Route path="/message"><Message/></Route>
                            <Route path="/staff"><Staff/></Route>
                            <Route path="/project"><Project/></Route>
                            <Route path="/report"><Report/></Route>
                            <Route path="/UpdateStaff"><UpdateStaff/></Route>
                            <Route path="/addMessage"><AddMessage/></Route>
                            <Route path="/deleteStaff"><DeleteStaff/></Route>
                            <Route path="/SearchStaffById"><SearchStaffById/></Route>
                            <Route path="/addBug"><AddBug/></Route>
                            <Route path="/deleteOneBug"><DeleteBug/></Route>
                            <Route path="/updateBug"><UpdateBug/></Route>
                    </Switch>
                    </div>
                </div>
                
            </Router>
              
        </div>
    )
}
 
export default Routes;