import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import moment from "moment";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { insertData } from "../Hook/useInsertData";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const FirstTabComponent = ({ setIsLoading, setErrorMessage } ) => {

  const [showErrors, setShowErrors] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    delieveryDate: 0,
    salary: 0,
    sowftWareTool: "",
    catogery: "",
  });

  const categpries = ['Web Design', 'Marketing', 'Business' ,'Software Engineering' , 'Web Developer', 'App Developer' ,'Product Manager' , 'Accountant,Ui/Ux Design' , 'Graphics Designer']

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const saveData = async () => {
    try {
      setIsLoading(true);
      const response = await insertData("posts", values);
      console.log("res: ", response);
    } catch (err) {
      console.log("err: ", err);
      setErrorMessage(
        err?.response?.data?.message ?? "Error, Please try again later"
      );
    }
    setIsLoading(false);
  };

 

  const OnSubmit = () => {
    if (
      values.name.length === 0 ||
      values.description.length === 0 ||
      Number(values.salary) === 0 ||
      values.catogery.length === 0 ||
      Number(values.delieveryDate) === 0
    ) {
      setShowErrors(true);
    } else {
      //talk to backend
      saveData();
    }
  };

  return (
    <>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">
          <Form>
            <div>
              <label
                htmlFor="fname"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Name of your Task
              </label>
              <FormControl
                sx={{ m: 1 }}
                error={showErrors && values.name.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  value={values.name}
                  onChange={(e) => {
                    handleChange("name", e.target.value);
                  }}
                  error={showErrors && values.name.length === 0}
                  fullWidth
                  placeholder="Create responsive design"
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.name.length === 0 &&
                    "Please Enter Name of your Task"}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="Description"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Tell us about your task
              </label>
              <FormControl
                sx={{ m: 1 }}
                error={showErrors && values.description.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-multiline-static"
                  placeholder="Description"
                  value={values.description}
                  onChange={(e) => {
                    handleChange("description", e.target.value);
                  }}
                  error={showErrors && values.description.length === 0}
                  multiline
                  rows={4}
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.description.length === 0 &&
                    "Please Enter description"}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="Delivery Date"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Delivery Date
              </label>
              <FormControl
                sx={{ m: 1, background: "#F5F5F5" }}
                fullWidth
                variant="outlined"
              >
                <LocalizationProvider error={false} dateAdapter={AdapterMoment}>
                  <DemoItem>
                    <DesktopDatePicker
                      value={
                        values.delieveryDate === 0
                          ? ""
                          : moment(values.delieveryDate)
                      }
                      onChange={(e) => {
                        console.log("djsgfk: ", e);
                        handleChange("delieveryDate", moment(e).format("X"));
                      }}
                    />
                  </DemoItem>
                </LocalizationProvider>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="salary"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Salary
              </label>
              <FormControl
                sx={{ m: 1 }}
                error={showErrors && Number(values.salary) === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  type="number"
                  value={values.salary === 0 ? "" : values.salary}
                  onChange={(e) => {
                    handleChange("salary", e.target.value);
                  }}
                  error={showErrors && Number(values.salary) === 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    Number(values.salary) === 0 &&
                    "Salary should be longer than 1000"}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="Software Tool"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Software Tool
              </label>
              <FormControl
                sx={{ m: 1 }}
                error={showErrors && values.sowftWareTool.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  value={values.sowftWareTool}
                  onChange={(e) => {
                    handleChange("sowftWareTool", e.target.value);
                  }}
                  error={showErrors && values.sowftWareTool.length === 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.sowftWareTool.length === 0 &&
                    "Enter Sowftware Tool"}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="catogery"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                catogery
              </label>
              <FormControl fullWidth error={showErrors && values.catogery.length === 0}>
                <Select
                  id="category"
                  value={values.catogery}
                  onChange={(e) => {
                    handleChange("catogery", e.target.value);
                  }}
                  error={showErrors && values.catogery.length === 0}
                >
                  {categpries.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {showErrors &&
                    values.catogery.length === 0 &&
                    "You should be choose a catogery"}
                </FormHelperText>
              </FormControl>
              {/* <FormControl
                sx={{ m: 1 }}
                error={showErrors && values.catogery.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  value={values.catogery}
                  onChange={(e) => {
                    handleChange("catogery", e.target.value);
                  }}
                  error={showErrors && values.catogery.length === 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.catogery.length === 0 &&
                    "You should be choose a catogery"}
                </FormHelperText>
              </FormControl> */}
            </div>
          </Form>
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">
          <button onClick={OnSubmit} className="btn-PostTask">
            Save
          </button>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </>
  );
};
