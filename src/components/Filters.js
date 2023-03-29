import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
// Import icons from 'react-icons' library
import { MdArrowDropDown } from "react-icons/md";

// Import styles
import "../styles/filters.css";
import { Typography } from "@mui/material";
const FilterGroup = ({ title, data }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="filter-group">
      <div className="group-header" onClick={() => setShow(!show)}>
        <span>{title}</span>
        <MdArrowDropDown className={`${!show && "up"}`} />
      </div>
      {show && (
        <div className="options">
          <FormGroup>
            {data.map((d, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={
                    <Typography variant="body2" color="#555" fontSize={18}>
                      {d.name}
                    </Typography>
                  }
                  value={d.value}
                />
              );
            })}
          </FormGroup>
        </div>
      )}
    </div>
  );
};

const PriceFilter = () => {
  const [show, setShow] = useState(true);

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="filter-group">
      <div className="group-header" onClick={() => setShow(!show)}>
        <span>Salary</span>
        <MdArrowDropDown className={`${!show && "up"}`} />
      </div>

      {show && (
        <div className="options">
          <div className="salary-range">
            <div>
              <span>Minimum</span>
              <input type="text" value={value[0]} readOnly />
            </div>
            <div>
              <span>Maximum</span>
              <input type="text" value={value[1]} readOnly />
            </div>
          </div>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </div>
      )}
    </div>
  );
};

const Filters = ({ show }) => {
  return (
    <div className={`filters ${show ? "show" : ""}`}>
      <FilterGroup
        data={[
          { name: "Web developer", value: "web-developer" },
          { name: "UX Designer", value: "ux-designer" },
          { name: "Node.js", value: "nodejs" },
          { name: "Illustrators", value: "illustrators" },
        ]}
        title="Skills"
      />
      <PriceFilter />

      <FilterGroup
        data={[
          { name: "Top Rated Seller", value: "top-rated-seller" },
          { name: "Level Two", value: "level-two" },
          { name: "Level One", value: "level-one" },
          { name: "New Seller", value: "new-seller" },
        ]}
        title="Level"
      />
    </div>
  );
};

export default Filters;
