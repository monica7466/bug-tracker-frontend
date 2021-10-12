import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const SearchReport = () => {
 
    const [reportList] = useState([]);
    const [report, setReport] = useState({
 
        reportId: 0,
        solutionDescription: '',
        status: '',
        projectId: 0
       
    });
 
   
    const handleReporttData = (evt) => {
 
        console.log("handleReporttData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value,
        });
 
        evt.preventDefault();
    }
 
    const SearchReport= (evt) => {
        console.log("SearchReport");
        axios.get(`http://localhost:8082/Report/searchReportByProjectID${report.projectId}`)
            .then((response) => {
                setReport(response.data);
            }).catch(error => {
                alert("Project ID does not exist!");
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Get Report By ID</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Get Report By ID</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={SearchReport} >
                    <div>
                        <p>REPORT ID</p>
                        <input
                            type="number"
                            id="projectId"
                            name="projectId"
                            className="form-control mb-3"
                            value={report.projectId}
                            placeholder="Enter Id"
                            onChange={handleReporttData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Get Project Details"
                        />
                    </div>
                </form>
                <table class="table table-hover table-secondary table-striped">
                    <thead>
                        <tr>
                        <th scope="col">PROJECT ID</th>
                        <th scope="col">SOLUTION DESCRIPTION</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">PROJECT ID</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                                    <th scope="row">{report.reportId}</th>
                                    <td>{report.solutionDescription}</td>
                                    <td>{report.status}</td>
                                    <td>{report.projectId}</td>
                                        
                        </tr>
                    </tbody>
                </table>
                             
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}
 
export default SearchReport;