import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../styles/PostTask.css";
import TabsNavigation from "../components/TabsNavigation";
import Layout from "../ui/Layout";
export const PostTask = () => {
  return (
    <div>
    <Layout>
    <Container>
      <TabsNavigation />
    
    </Container>
    </Layout>
    </div>
  );
};
