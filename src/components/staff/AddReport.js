// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';

// const AddReport = (props) => {

//     const [report, setReport] = useState({
//         reportId: 0,
//         solutionDescription: '',
//         status: '',
//         project: 0
        
//     });


//     const handleReportData = (evt) => {
//         console.log("handleReportData", evt.target.name, evt.target.value);
//         setReport({
//             ...report,
//             [evt.target.name]: evt.target.value
//         });
//     }

//     const addReport = (evt) => {
//         console.log("submitReportData");
//         axios.post('http://localhost:8082/report/AddProjectReport', report)
//             .then((response) => {
//                 setReport(response.data);
//                 alert(`Report added Successfully!`)
//             }).catch(error => {
//                 console.log(error.report);
//                 alert('Enter Correct Details!');
//             });
//         evt.preventDefault();
//     }

   

//     return (
//         <div className="container" >
//             <div>
//                <br/>
//                 <form className="form form-group row" onSubmit={addReport} >
//                     <div>
//                     <p>SOLUTION DESCRIPTION</p>
//                         <input
//                             type="text"
//                             id="solutionDescription"
//                             name="solutionDescription"
//                             className="form-control mb-3"
//                             placeholder="Solution Description"
//                             onChange={handleReportData}
//                         />
//                         <p>STATUS</p>
//                         <input
//                             type="text"
//                             id="status"
//                             name="status"
//                             className="form-control mb-3"
//                             placeholder="Status"
//                             onChange={handleReportData}
//                         />
//                         <p>PROJECT ID</p>
//                         <input
//                             type="number"
//                             id="project"
//                             name="project"
//                             className="form-control mb-3"
//                             placeholder="Project Id"
//                             onChange={handleReportData}
//                         />
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="btn btn-primary mb-3"
//                             value="Add report"
//                         />
//                     </div>
//                 </form>
//                 {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
//             </div>
//            </div> 
//     );
// }
// export default AddReport;
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const AddReport = (props) => {


    const [report, setReport] = useState({
        reportId: 0,
        solutionDescription:'',
        status: '',
        project:0
    });

    const [oneReport, setOneReport] = useState({
        reportId: 0,
        solutionDescription:'',
        status:'',
        project:0
    });

    const handleReportData = (evt) => {
        console.log("handleReportData", evt.target.name, evt.target.value);
        setReport({
            ...report,
            [evt.target.name]: evt.target.value
        });
    }


    const submitReportData = (evt) => {
        console.log("submitReportData");
        axios.post('http://localhost:8082/report/AddProjectReport', report)
            .then((response) => {
                setOneReport(response.data);
                alert(`Report added Successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!');
            });
        evt.preventDefault();
    }

   

    return (
        <div className="container" >
            <div>
                <p>Add a REPORT</p>
                <form className="form form-group row" onSubmit={submitReportData} >
                    <div>
                    <input
                            type="number"
                            id="project"
                            name="project"
                            className="form-control mb-3"
                            placeholder="Project ID"
                            onChange={handleReportData}
                        />
                        <input
                            type="text"
                            id="solutionDescription"
                            name="solutionDescription"
                            className="form-control mb-3"
                            placeholder="solutionDescription"
                            onChange={handleReportData}
                        />
                        <input
                            type="text"
                            id="status"
                            name="status"
                            className="form-control mb-3"
                            placeholder="status"
                            onChange={handleReportData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add messsage"
                        />
                    </div>
                </form>
                {/* <p> {emp.eid} {emp.firstName} {emp.salary} </p> */}
            </div>
           </div> 
    );
}
export default AddReport;