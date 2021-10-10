import React, { useState } from "react";
 
export const AddBug = () => {
  let [des, setDes] = useState("");
 
  return (
    <div className="adminDash">
      <h4>Add New Bug Details</h4>
 
      <form id="issueInputForm">
        <div className="form-group">
          <label htmlFor="issueDecInput">
            Bug Name <span className="text-danger">*</span>
          </label>
          <input
            type="name"
            name="name"
            id="name"
            // Add data-testid here : jest-test
            data-testid="name"
            className="form-control mb-3"
            placeholder="Add Bug Name"
            value={des}
            onChange={(event) => {
              setDes(event.target.value);
            }}
          />
          <label htmlFor="issueDecInput">
            Raise Date <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            name="date"
            id="date"
            // Add data-testid here : jest-test
            data-testid="name"
            className="form-control mb-3"
            placeholder="Raise Date"
            value={des}
            onChange={(event) => {
              setDes(event.target.value);
            }}
          />
          <label htmlFor="issueDecInput">
            Description <span className="text-danger">*</span>
          </label>
          <input
            id="issueDecInput"
            className="form-control"
            type="text"
            placeholder=" Add Description "
            value={des}
            onChange={(event) => {
              setDes(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="issueAssignInput">
            User ID <span className="text-danger">*</span>
          </label>
          <input
            id=""
            className="form-control"
            type="number"
            placeholder="User ID"
            value="fdsf"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddBug;