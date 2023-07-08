

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import  getallusersaction  from "../redux/actions/allusersAction";

// Import styles
import "../styles/freelancers.css";
import FreelancerCard from "./FreelancerCard";


const FreeLancers = ({topusers}) => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  //get all users----------------------------------------------------
  const dispatchh3=useDispatch();
  useEffect(()=>{
    dispatchh3(getallusersaction())   //هنا انا بجيب الاكشن اللي عايزه انفذه
  },[])

  const high=useSelector(state=>state.allusersReducer.all) //انا هنا باكسس الداتا بتاعتي عن طريق الريديوسر
  const loading=useSelector(state=>state.allusersReducer.loading2)
  console.log(high)
  //console.log(high.users[0].skills)
  console.log(loading) 




  //------------------------------

  return (
    <div className="freelancers">
      <div className="freelancers-header">
        <h3>Best Freelancer</h3>

        <div className="sort-by">
          <span>Sort by</span>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value={"best-selling"}>Best selling</MenuItem>
              <MenuItem value={"salary-ascending"}>Salary ascending</MenuItem>
              <MenuItem value={"salary-descending"}>Salarydescending</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="freelancers-contanier">
      
        {
          high.users?(
            high.users.map((item)=>{
              return(

            
            <FreelancerCard  title2={item.name} img={item.photo}
             job={item.job} rate={item.ratingsAverage}
              reve={item.ratingsQuantity} skill1={item.skills[0]} 
              skill2={item.skills[1]} skill3={item.skills[2]}/>
              
              
              )})
             ):null
              }
     </div>
    </div>
  );
};

export default FreeLancers;
