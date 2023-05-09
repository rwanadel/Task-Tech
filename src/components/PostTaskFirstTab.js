import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import LoaderComponents from "./LoaderComponents";
import { CustomSnackbar } from "./customSnackbar";
import { insertData } from "../Hook/useInsertData";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const FirstTabComponent = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    salary: "",
    sowftWareTool: "",
    category: "",
  });
  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
  const saveData = async () => {
    try {
      setIsLoading(true)
      const response = await insertData("services", values);
      console.log("res: ", response);
    } catch (err) {
      console.log("err: ", err);
      setErrorMessage(
        err?.response?.data?.message ?? "Error, Please try again later"
      );
    }
    setIsLoading(false)
  };
  const OnSubmit = () => {
    if (
      values.name.length === 0 ||
      values.description.length === 0 ||
      values.salary <= 1000 ||
      values.sowftWareTool.length <= 0 ||
      values.category.length === 0
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
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          setErrorMessage("");
        }}
      />
      <LoaderComponents open={isLoading} />
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

            {/* <div>
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
              <FormControl  sx={{ m: 1 ,background:"#F5F5F5" }} fullWidth variant="outlined">
                <LocalizationProvider   dateAdapter={AdapterMoment}>
                  <DemoContainer  components={["DatePicker"]} >
                    <DatePicker  label="Basic date picker" />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </div> */}

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
                error={showErrors && values.salary >=1000}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  type="number"
                  value={values.salary}
                  onChange={(e) => {
                    handleChange("salary", e.target.value);
                  }}
                  error={showErrors && values.salary >=1000}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.salary.length === 0 &&
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
                htmlFor="Category"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Category
              </label>
              <FormControl
                sx={{ m: 1 }}
                error={showErrors && values.category.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  value={values.category}
                  onChange={(e) => {
                    handleChange("category", e.target.value);
                  }}
                  error={showErrors && values.category.length === 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.category.length === 0 &&
                    "You should be choose a category"}
                </FormHelperText>
              </FormControl>
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
