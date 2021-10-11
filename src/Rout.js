import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import Bugs from './components/admin/Bugs';
import Message from './components/admin/Message';
import Project from './components/admin/Project';
import Report from './components/admin/Report';
import Staff from './components/admin/Staff';
import CustomHeader from './components/CustomHeader';
import Projects from './components/staff/Projects';
import Reports from './components/staff/Reports';
import StaffDashboard from './components/staff/StaffDashboard';
import Staffs from './components/staff/Staffs';
const Rout = () => {
    return (
        <div>
            <Router>
                <div>
                    <CustomHeader />
                    <div>
                        <Switch>
                            <Route path="/adminDashboard"><AdminDashboard /></Route>
                            {/* <Route path="/about"><AboutUs /></Route> */}
                            <Route path="/bugs"><Bugs /></Route>
                            <Route path="/message"><Message /></Route>
                            <Route path="/staff"><Staff /></Route>
                            <Route path="/project"><Project /></Route>
                            <Route path="/report"><Report /></Route>
                            <Route path="/staffDashboard"><StaffDashboard/></Route>
                            <Route path="/staffs"><Staffs /></Route>
                            <Route path="/projects"><Projects /></Route>
                            <Route path="/reports"><Reports /></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Rout;