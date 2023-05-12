import React, { useCallback, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";
import moment from "moment";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";

import { insertData } from "../Hook/useInsertData";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export const SecTabComponent = ({ setIsLoading, setErrorMessage }) => {
  const user = useSelector((state) => state.authReducer?.userData?.user?.id)
  console.log('user: ', user)
  const [showErrors, setShowErrors] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    delieveryDate: 0,
    salary: 0,
    softwareTool: "",
    category: "",
    attachFile: "",
  });

  const categpries = [
    "Web Design",
    "Marketing",
    "Business",
    "Software Engineering",
    "Web Developer",
    "App Developer",
    "Product Manager",
    "Accountant",
    "Ui/Ux Design",
    "Graphics Designer",
  ];

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const saveData = async () => {
    try {
      setIsLoading(true);
      console.log('values: ', values)
      const {
        name,
        description,
        delieveryDate,
        salary,
        softwareTool,
        category,
        attachFile,
      } = values;

      const formData = new FormData();

      formData.append('user', user)
      formData.append('name', name)
      formData.append('description', description)
      formData.append('delieveryDate', delieveryDate)
      formData.append('salary', salary)
      formData.append('sowftWareTool', softwareTool)
      formData.append('category', category)
      formData.append('attachFile', attachFile)

      console.log('formData: ', {...values, user})

      const response = await insertData("services",  {...values, user});
      console.log("res: ", response);
    } catch (err) {
      console.log("err: ", err);
      setErrorMessage(
        err?.response?.data?.message ?? "Error, Please try again later"
      );
    }
    setIsLoading(false);
  };
  const getSalaryErrorMessage = useCallback(() => {
    const { salary, category } = values;

    if (
      category === "Web Design" ||
      category === "Ui/Ux Design" ||
      category === "Graphics Designer"
    ) {
      if (salary > 50 && salary <= 70) {
        return "";
      }
      return "Salary for this category must be between 50$ to 70$";
    } else if (
      category === "Business" ||
      category === "Product Manager" ||
      category === "Marketing"
    ) {
      if (salary > 70 && salary <= 100) {
        return "";
      }
      return "Salary for this category must be between 70$ to 100$";
    } else if (
      category === "Software Engineering" ||
      category === "Web Developer" ||
      category === "App Developer" ||
      category === "Accountant"
    ) {
      if (salary >= 60 && salary <= 120) {
        return "";
      }
      return "Salary for this category must be between 60$ to 120$";
    } else {
      return "Please choose category, and add the salary value";
    }
  }, [values.category, values.salary]);

  const OnSubmit = () => {
    if (
      values.name.length === 0 ||
      values.description.length === 0 ||
      getSalaryErrorMessage()?.length > 0 ||
      values.category.length === 0 ||
      Number(values.delieveryDate) === 0
    ) {
      setShowErrors(true);
    } else {
      //talk to backend
      saveData();
    }
  };

  console.log("is error: ", Boolean(values?.attachFile?.name));

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
                htmlFor="Attach File"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Attach File
              </label>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "3.6rem",
                  marginLeft: "9px",
                  background: "#F5F5F5",
                }}
                color={
                  showErrors && !Boolean(values?.attachFile?.name)
                    ? "error"
                    : "inherit"
                }
                component="label"
              >
                {values?.attachFile?.name ?? "Please select a file to upload"}
                <input
                  hidden
                  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  multiple
                  type="file"
                  onChange={(e) => {
                    handleChange("attachFile", e.target.files[0]);
                  }}
                />
              </Button>
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
                error={showErrors && getSalaryErrorMessage()?.length > 0}
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
                  error={showErrors && getSalaryErrorMessage()?.length > 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    getSalaryErrorMessage()?.length > 0 &&
                    getSalaryErrorMessage()}
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
                error={showErrors && values.softwareTool.length === 0}
                fullWidth
                variant="outlined"
              >
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  value={values.softwareTool}
                  onChange={(e) => {
                    handleChange("softwareTool", e.target.value);
                  }}
                  error={showErrors && values.softwareTool.length === 0}
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
                <FormHelperText>
                  {showErrors &&
                    values.softwareTool.length === 0 &&
                    "Enter Sowftware Tool"}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <label
                htmlFor="category"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                category
              </label>
              <FormControl
                fullWidth
                error={showErrors && values.category.length === 0}
              >
                <Select
                  id="category"
                  value={values.category}
                  onChange={(e) => {
                    handleChange("category", e.target.value);
                  }}
                  error={showErrors && values.category.length === 0}
                >
                  {categpries.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
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
