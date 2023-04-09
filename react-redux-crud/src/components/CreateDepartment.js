import React, { useState } from "react";
import { useFormik } from "formik";
import { departmentFormSchema } from "../schemas";
import { addDepartmentData } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

// Creating add Department form using Mui and useFormik
// Validating for required and department already exist or not

const CreateDepartment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataExist, setDataExist] = useState(false)

  // Getting Department Data from reducer
  const DepartmentList = useSelector(state => state.DepartmentList.departmentData)

  // Initalizing department values
  const initialValues = {
    dId : 0,
    departmentName: "",
    departmentDetail: ""
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    validationSchema: departmentFormSchema,
    onSubmit: (values) => {
      // On submit add department form checking for department already exist or not.
      // if exist then will not add into list , will just showing error msg

      let data = DepartmentList.filter(dl => {
        return dl.departmentName === values.departmentName
      })
      
      if(data.length === 0) {
        // if added department name not exist
        values.dId = DepartmentList.length + 1;
        dispatch(addDepartmentData(values))
        navigate('/departmentList')
      } else {
        // if added department name already exist
        setDataExist(true)
      }
    }
  });

  return (
    <div>
      <div className="container">
        <Typography sx={{ pt: 4 }} align="center" variant="h4">Create Department</Typography>

        <form onSubmit={handleSubmit}>
          <Grid sx={{ p: 4 }} container alignItems="center" justify="center" direction="column"
          >
            <TextField
              name="departmentName"
              type="text"
              label="Department Name"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.departmentName}
              error={errors?.departmentName}
            />
            {errors?.departmentName && touched?.departmentName && (
              <p style={{ color: "red" }}> {errors?.departmentName}</p>
            )}
            <TextField
              name="departmentDetail"
              type="text"
              label="Department Detail"
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              color="secondary"
              sx={{ mb: 1 }}
              value={values.departmentDetail}
              error={errors?.departmentDetail}
            />
            {errors?.departmentDetail && touched?.departmentDetail && (
              <p style={{ color: "red" }}> {errors?.departmentDetail}</p>
            )}
            <Button style = {{width: 250}} sx={{ mt: 4 }} type="submit" variant="outlined" color="secondary">
              submit
            </Button>
            {dataExist && <p style={{ color: "red" }}>Department already exist</p>}
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateDepartment;
