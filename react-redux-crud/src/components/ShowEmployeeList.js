import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Typography,
 TextField, IconButton,Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import './style.css'
import { deleteEmployeeData } from '../actions';
// import { makeStyles } from "@mui/core/styles";

// Updating,Deleting,searching data in employee list
// Redirecting to other page using useNavigate
// Using MUI table for listing emp data


const ShowEmployeeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Getting Employee Data from reducer
  const empData = useSelector(state => state.FetchEmployeeDetail.list)

  //on submit data get in this object
  const [searchData, setSearchData] = useState([]);

  //flag for data found or not
  const [flag, setflag] = useState(false);

  // On edit employee click , we are route to edit employee page with dynamic employee id
  const editEmployee = (id) => {
    navigate(`/editEmployee/${id}`)
  }

  // Delete Employee dispatch event by sending Employee id in action
  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeData(id))
  }

  // Search Employee data
  const handleChange = (e) => {
    // if search textfield is emply then so default data
    if (e.target.value === '') {
      setflag(false);
    } else {
      // checking for search data in employee stored data
      let temp = e.target.value;
      let resultData = empData.filter(obj => obj.firstName.toLowerCase().includes(temp.toLowerCase()))
      setSearchData(resultData);
      setflag(true);
    }
  }

  // flag = true if search data found in list
  const empList = flag ? searchData : empData;

  return (
    <div className="show-employee-list">
      <Typography sx={{ pt: 4, pb: 4 }} align="center" variant="h5">Employee List</Typography>
      <TextField
        id="standard-bare"
        variant="outlined"
        label="Search here.."
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell align="right">Last name</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {empList.length > 0 ? empList.map((row, i) => (
              <TableRow key={row.eId}>
                <TableCell component="th" scope="row"> {row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.dob}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right"><DeleteIcon onClick={() => deleteEmployee(row.eId)} /></TableCell>
                <TableCell align="right"><EditIcon onClick={() => editEmployee(row.eId)} /></TableCell>
              </TableRow>
            )) : <Typography textAlign="center" variant="h5">No record found</Typography>}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ShowEmployeeList