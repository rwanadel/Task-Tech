import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../styles/PostTask.css";
export const PostTask = () => {
  return (
    <Container>
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  fullWidth
                  placeholder="Create responsive design"
                  style={{ background: "#F5F5F5" }}
                />
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                  id="outlined-multiline-static"
                  placeholder="Description"
                  multiline
                  rows={4}
                  style={{ background: "#F5F5F5" }}
                />
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
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker  label="Basic date picker" />
                  </DemoContainer>
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  type="number"
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField
                  id="outlined-error"
                  variant="outlined"
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                />
              </FormControl>
            </div>
          </Form>
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">
          <button className="btn-PostTask">Save</button>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </Container>
  );
};
