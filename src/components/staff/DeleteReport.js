import axios from 'axios';
import React, { useState, useEffect } from 'react';
/**
* When staff deletes the project and submit it then report deleted will be displayed on console window.
* Staff can also delete the report with the help of URL and object to backend.
* If reportId  from the database matches, staff will able to see the alert message in a pop-up window as 'Report deleted successfully!'
* If reporId  from the database does not matches, staff will able to see the alert message in a pop-up window as 'Enter correct details!'

* @param  url  an absolute URL giving the base location from the database
* @param  name the location of the report, relative to the url argument
* @return     
* @see         alert report
*/
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
                                data-testid="reportId"
                                className="form-control mb-3"
                                value={report.reportId}
                                placeholder="Enter Id"
                                onChange={handleReportData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                data-testid="submit"
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