import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Import styles
import "../styles/freelancers.css";
import FreelancerCard from "./FreelancerCard";

const FreeLancers = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

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
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
      </div>
    </div>
  );
};

export default FreeLancers;
