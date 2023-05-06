import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import Navbar from "../components/Navbar";
import "../styles/PostTask.css";
export const PostTask = () => {
  return (
    <Container>
      <Navbar/>
      <Row>
        <Col sm="3"></Col>
        <Col sm="6">
          <Form>
            <div>
              <label
                for="fname"
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
                  style={{background: "#F5F5F5"}}
                />
              </FormControl>
            </div>

            <div>
              <label
                for="Description"
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
                  style={{background: "#F5F5F5"}}
                />
              </FormControl>
            </div>

            <div>
              <label
                for="salary"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                  
                }}
              >
                Salary
              </label>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField id="outlined-error" variant="outlined" type="number" fullWidth style={{background: "#F5F5F5"}}/>
              </FormControl>
            </div>

            <div>
              <label
                for="Software Tool"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Software Tool
              </label>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField id="outlined-error" variant="outlined" fullWidth style={{background: "#F5F5F5"}} />
              </FormControl>
            </div>

            <div>
              <label
                for="Category"
                style={{
                  marginTop: "20px",
                  marginLeft: "9px",
                  fontSize: "20px",
                }}
              >
                Category
              </label>
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <TextField id="outlined-error" variant="outlined" fullWidth style={{background: "#F5F5F5"}} />
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
