import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const DeleteReport = () => {
 
    const [report, setReport] = useState({
        reportId: '',
        solutionDescription: '',
        status: '',
        project: '',
 
    });


 
    const handleReportData = (evt) => {
 
        console.log("handleReportData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value,
 
        });
 
        evt.preventDefault();
    }
 
    const deleteReport = (evt) => {
 
        console.log(report);
        axios.delete(`http://localhost:8082/Report/deleteReport/${report.reportId}`)
            .then((response) => {
                console.log(response);
                setReport(response.data);
                alert('Report deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
 
    return (
        <div className="container" >
            <title>Delete Report</title>
            <div class="card" style={{ width: "18rem" }} className="container">
 
                <div class="card-body">
                    <h3 >Delete Report</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={deleteReport} >
                        <div>
                            <p>Report Id</p>
                            <input
                                type="number"
                                id="reportId"
                                name="reportId"
                                className="form-control mb-3"
                                value={report.reportId}
                                placeholder="Enter Id"
                                onChange={handleReportData}
                            />
 
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Delete Report "
                            />
                        </div>
                    </form>
                    <h1>{report.reportId}</h1>
 
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}
 
export default DeleteReport;