import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography,Paper } from "@mui/material";
// import Table from "@mui/core/Table";
// import TableBody from "@mui/core/TableBody";
// import TableCell from "@mui/core/TableCell";
// import TableContainer from "@mui/core/TableContainer";
// import TableHead from "@mui/core/TableHead";
// import TableRow from "@mui/core/TableRow";
// import { Typography } from '@mui/material';
// import Paper from "@mui/core/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDepartmentData } from '../actions';
import './style.css'

// Showing Department list by MUI table and redux stored data
// Delete Department functionality

const ShowDepartmentList = () => {
  // Getting Department Data from reducer
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)
  const dispatch = useDispatch();

  const deleteDepartment = (id) => {
    // Delete department dispatch event by sending department id in action
    dispatch(deleteDepartmentData(id))
  }
  return (
    <div className="show-employee-list">
      <Typography sx={{ pt: 4 }} align="center" variant="h4">Department List</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Department name</TableCell>
              <TableCell align="right">Department Detail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {DepartmentList.map((row, i) => (
              <TableRow key={row.dId}>
                <TableCell component="th" scope="row"> {row.departmentName}</TableCell>
                <TableCell align="right">{row.departmentDetail}</TableCell>
                <TableCell align="right"><DeleteIcon onClick={() => deleteDepartment(row.dId)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default ShowDepartmentList