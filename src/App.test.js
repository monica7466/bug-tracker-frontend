import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddBug } from './component/user/AddBug';
import { getByTestId, getByText } from '@testing-library/dom';
import App from './App';
import AddMessage from './component/staff/AddMessage';



//*********************************************** LOGIN OPERATION ***********************************************


// Tesing userId, password, submit inputForm for UserLogin
test('find submit in UserLogin', () => {
  const { queryByTestId } = render(
    <UserLogin />
  );
  expect(queryByTestId("userId", "password", "submit")).toBeTruthy();

});

// Tesing userId, password, submit inputForm for UserRegister
test('find submit in UserRegister', () => {
  const { queryByTestId } = render(
    <UserRegister />
  );
  expect(queryByTestId("userName", "password", "submit")).toBeTruthy();
});

// Tesing staffId, password, submit inputForm for StaffLogin
test('find submit in StaffLogin', () => {
  const { queryByTestId } = render(
    <StaffLogin />
  );
  expect(queryByTestId("staffId", "password", "submit")).toBeTruthy();
});

// Tesing adminId, password, submit inputForm for AdminLogin
test('find submit in AdminLogin', () => {
  const { queryByTestId } = render(
    <AdminLogin />
  );
  expect(queryByTestId("adminId", "password", "submit")).toBeTruthy();
});




//*********************************************** ADD OPERATION ***********************************************



// Tesing messages, users, submit inputForm for AddMessage
test('find submit in AddMessage', () => {
  const { queryByTestId } = render(
    <AddMessage />
  );
  expect(queryByTestId("submit", "messages", "users")).toBeInTheDocument();
});

// Tesing bugId, bugName, raisedDate, description, users, submit inputForm for AddBug
test('find submit in AddBug', () => {
  const { queryByTestId } = render(
    <AddBug />
  );
  expect(queryByTestId("bugId", "bugName", "raisedDate", "description", "users", "submit")).toBeTruthy();
});

// Tesing projectID, projectName, bugId, startDateOfProject, endDateOfProject, staffId, projectPriority, submit inputForm for AddProject
test('find submit in AddProject', () => {
  const { queryByTestId } = render(
    <AddProject />
  );
  expect(queryByTestId("projectID", "projectName", "bugId", "startDateOfProject", "endDateOfProject", "staffId"
    , "projectPriority", "submit")).toBeTruthy();
});

// Tesing staffId, staffPassword, userName,  submit inputForm for AddStaff
test('find submit in AddStaff', () => {
  const { queryByTestId } = render(
    <AddStaff />
  );
  expect(queryByTestId("staffId", "staffPassword", "userName", "submit")).toBeTruthy();
});

// Tesing projectID, descriptionSolution, status, submit inputForm for AddReport
test('find submit in AddReport', () => {
  const { queryByTestId } = render(
    <AddReport />
  );
  expect(queryByTestId("projectID", "descriptionSolution", "status", "submit")).toBeTruthy();
});




//*********************************************** UPDATE OPERATION ***********************************************


// Tesing projectID, descriptionSolution, status, submit inputForm for UpdateReport
test('find submit in UpdateReport', () => {
  const { queryByTestId } = render(
    <UpdateReport />
  );
  expect(queryByTestId("reportID", "status", "descriptionSolution", "projectId", "submit")).toBeTruthy();
});

// Tesing projectID, projectName, bugId, startDateOfProject, endDateOfProject, staffId, projectPriority, submit inputForm for UpdateProject
test('find submit in UpdateProject', () => {
  const { queryByTestId } = render(
    <UpdateProject />
  );
  expect(queryByTestId("projectID", "projectName", "bugId", "startDateOfProject", "endDateOfProject", "staffId", "projectPriority", "submit")).toBeTruthy();
});


// Tesing staffId, staffPassword, userName,  submit inputForm for UpdateStaff
test('find submit in UpdateStaff', () => {
  const { queryByTestId } = render(
    <UpdateStaff />
  );
  expect(queryByTestId("StaffId", "userName", "staffPassword", "submit")).toBeTruthy();
});


// Tesing bugId, bugName, raisedDate, description, users, submit inputForm for UpdateBug
test('find submit in UpdateBug', () => {
  const { queryByTestId } = render(
    <UpdateBug />
  );
  expect(queryByTestId("bugId", "bugName", "raisedDate", "description", "users", "submit")).toBeTruthy();
});




//*********************************************** DELETE OPERATION ***********************************************



// Testing usertId, submit inputForm for DeleteBug
test('find submit in DeleteBug', () => {
  const { queryByTestId } = render(
    <DeleteBug />
  );
  expect(queryByTestId("bugId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for DeleteProject
test('find submit in DeleteProject', () => {
  const { queryByTestId } = render(
    <DeleteProject />
  );
  expect(queryByTestId("projectId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for DeleteStaff
test('find submit in DeleteStaff', () => {
  const { queryByTestId } = render(
    <DeleteStaff />
  );
  expect(queryByTestId("staffId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for DeleteReport
test('find submit in DeleteReport', () => {
  const { queryByTestId } = render(
    <DeleteReport />
  );
  expect(queryByTestId("reportId", "submit")).toBeTruthy();
});



//*********************************************** SEARCH OPERATION ***********************************************



// Testing usertId, submit inputForm for SearchReport
test('find submit in SearchReport', () => {
  const { queryByTestId } = render(
    <SearchReport />
  );
  expect(queryByTestId("projectId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for SearchProject
test('find submit in SearchProject', () => {
  const { queryByTestId } = render(
    <SearchProject />
  );
  expect(queryByTestId("projectId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for SearchStaff
test('find submit in SearchStaff', () => {
  const { queryByTestId } = render(
    <SearchStaff />
  );
  expect(queryByTestId("staffId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for SearchBug
test('find submit in SearchBug', () => {
  const { queryByTestId } = render(
    <SearchBug />
  );
  expect(queryByTestId("bugId", "submit")).toBeTruthy();
});

// Testing usertId, submit inputForm for SearchReport
test('find submit in SearchReport', () => {
  const { queryByTestId } = render(
    <SearchReportById />
  );
  expect(queryByTestId("reportId", "submit")).toBeTruthy();

});

// Testing usertId, submit inputForm for GetMyMessages
test('find submit in GetMyMessages', () => {
  const { queryByTestId } = render(
    <GetMyMessages />
  );
  expect(queryByTestId("usertId", "submit")).toBeTruthy();

});



//*********************************************** GET ALL OPERATION ***********************************************


// Testing submit inputForm for GetAllBug
test('find submit in GetAllBug', () => {
  const { queryByTestId } = render(
    <GetAllBug />
  );
  expect(queryByTestId("submit")).toBeTruthy();
});

// Testing submit inputForm for GetAllProject
test('find submit in GetAllProject', () => {
  const { queryByTestId } = render(
    <GetAllProject />
  );
  expect(queryByTestId("submit")).toBeTruthy();
});

// Testing submit inputForm for GetAllReport
test('find submit in GetAllReport', () => {
  const { queryByTestId } = render(
    <GetAllReport />
  );
  expect(queryByTestId("submit")).toBeTruthy();
});

// Testing submit inputForm for GetAllStaff
test('find submit in GetAllStaff', () => {
  const { queryByTestId } = render(
    <GetAllStaff />
  );
  expect(queryByTestId("submit")).toBeTruthy();
});

// Testing submit inputForm for ViewAllStaff
test('find submit in ViewAllStaff', () => {
  const { queryByTestId } = render(
    <ViewAllStaff />
  );
  expect(queryByTestId("submit")).toBeTruthy();
});










// // import { render, screen } from '@testing-library/react';
// // import App from './App';

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

