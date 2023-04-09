Create two SQL/MySQL table which should content at list below fields Or you can also create react
redux-store
EmployeeMaster Table should have below fields
o EmployeeFirstName
o EmployeeLastName
o EmployeeDOB
o EmployeeSalary
o Department
DepartmentMaster Table should have below fields
o DepartmentName
o DepartmentDetails

What you need to follow:
1) All data should be store in database/redux-store and retrieve same to display
2) Don’t create class component. Only create function component

Create React application to implement below features
1) All data should be store in database/redux-store
2) Create Employee List with Department. It should have edit, delete and search option
3) Implement Create Employee (note: It should like form entry and not like below department screen)
4) User can Edit employee details from Employee List page
5) Validation should be there, and all fields are mandatory
6) Create Department List page with inline add and delete feature with validation (required and
already in use). This Department list page should be like below. By clicking on “Add” button record
should save to database/redux-store and new row will generate for new department entry.

https://www.digitalocean.com/community/tutorials/managing-form-state-in-react-with-redux-form


Worked comments
--------------------
Formik used for creating and handling data
Yup used for error handling in schemas/index.js
Material UI used for UI elements (forms , fields)
Redux used for global data storage and access


Screenshot attached of created forms/printed data
---------------------------------------------------
Create employee - https://prnt.sc/qLY3MZ3Z9AFh
EmployeeList - https://prnt.sc/NhR4VBGmLcBS
No record found(ON search) - https://prnt.sc/3AxWawPJ0fhY
Edit employee data - https://prnt.sc/Seretpo0xJoO
Create Department  - https://prnt.sc/9GRMFo9Va2IN
Validation while Create Department - https://prnt.sc/DZdcEsdw12Ac
DepartmentList - https://prnt.sc/rB_YsPeljYQP

References:

// https://mui.com/system/spacing/#api
// https://mui.com/material-ui/react-grid/
// https://www.copycat.dev/blog/material-ui-table/