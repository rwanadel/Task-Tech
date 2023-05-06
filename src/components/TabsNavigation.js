import React from 'react'

const TabsNavigation = () => {
  return (
    <div>
      lol
    </div>
  )
}

export default TabsNavigation

// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <Container>
//           <Row>
//             <Col sm="3"></Col>
//             <Col sm="6">
//               <Form>
//                 <div>
//                   <label
//                     for="fname"
//                     style={{
//                       marginTop: "20px",
//                       marginLeft: "9px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Name of your Task
//                   </label>
//                   <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
//                     <TextField
//                       id="outlined-error"
//                       variant="outlined"
//                       fullWidth
//                       placeholder="Create responsive design"
//                       style={{ background: "#F5F5F5" }}
//                     />
//                   </FormControl>
//                 </div>

//                 <div>
//                   <label
//                     for="Description"
//                     style={{
//                       marginTop: "20px",
//                       marginLeft: "9px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Tell us about your task
//                   </label>
//                   <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
//                     <TextField
//                       id="outlined-multiline-static"
//                       placeholder="Description"
//                       multiline
//                       rows={4}
//                       style={{ background: "#F5F5F5" }}
//                     />
//                   </FormControl>
//                 </div>

//                 <div>
//                   <label
//                     for="salary"
//                     style={{
//                       marginTop: "20px",
//                       marginLeft: "9px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Salary
//                   </label>
//                   <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
//                     <TextField
//                       id="outlined-error"
//                       variant="outlined"
//                       type="number"
//                       fullWidth
//                       style={{ background: "#F5F5F5" }}
//                     />
//                   </FormControl>
//                 </div>

//                 <div>
//                   <label
//                     for="Software Tool"
//                     style={{
//                       marginTop: "20px",
//                       marginLeft: "9px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Software Tool
//                   </label>
//                   <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
//                     <TextField
//                       id="outlined-error"
//                       variant="outlined"
//                       fullWidth
//                       style={{ background: "#F5F5F5" }}
//                     />
//                   </FormControl>
//                 </div>

//                 <div>
//                   <label
//                     for="Category"
//                     style={{
//                       marginTop: "20px",
//                       marginLeft: "9px",
//                       fontSize: "20px",
//                     }}
//                   >
//                     Category
//                   </label>
//                   <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
//                     <TextField
//                       id="outlined-error"
//                       variant="outlined"
//                       fullWidth
//                       style={{ background: "#F5F5F5" }}
//                     />
//                   </FormControl>
//                 </div>
//               </Form>
//             </Col>
//             <Col sm="3"></Col>
//           </Row>
//           <Row>
//             <Col sm="3"></Col>
//             <Col sm="6">
//               <button className="btn-PostTask">Save</button>
//             </Col>
//             <Col sm="3"></Col>
//           </Row>
//         </Container>{" "}
        
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
