import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllReport = (props) => {

    const [reportList, setReportList] = useState([]);
    const [report, setReport] = useState({
        reportId: 0,
        solutionDescription: '',
        status: '',
        project: 0
    });
    const [oneReport, setOneReport] = useState({
        reportId: 0,
        solutionDescription: '',
        status: '',
        project: 0
    });


    const handleReportData = (evt) => {
        console.log("handleReportData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOneReportData = (evt) => {
        console.log("handleOneBugData", evt.target.name, evt.target.value);
        setOneReport({
            ...report,
            [evt.target.name]: evt.target.value
        });
    }




    const viewReport = (evt) => {
        axios.get('http://localhost:8082/bug/getAllbugs')
            .then((response) => {
                setReportList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Report List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Report</title>
            <h1>View Report Details</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Report"
                        onClick={viewReport}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-secondary table-striped">
                        <thead>
                            <tr>

                                <th scope="col">REPORT ID</th>
                                <th scope="col">SOLUTION DESCRIPTION</th>
                                <th scope="col">SRTATUS</th>
                                <th scope="col">PROJECT ID</th>

                            </tr>
                        </thead>
                        <tbody>
                            
                                {bugList.map((r, k) => {
                                    console.log(r);
                                    return (

                                        <tr k={k}>

                                            <th scope="row">{r.reportId}</th>
                                            <td>{r.solutionDescription}</td>
                                            <td>{r.status}</td>
                                            <td>{r.project}</td>

                                            </tr>

                                    )
                                })}
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllReport;