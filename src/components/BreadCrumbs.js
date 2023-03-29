import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadCrumbs = () => {
  return (
    <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="#888"
          fontWeight={500}
          fontSize={18}
          href="/"
        >
          Home
        </Link>
        <Link
          underline="hover"
          color="#888"
          fontWeight={500}
          href="/"
          fontSize={18}
        >
          Services
        </Link>
        <Typography fontSize={18} fontWeight={600} color="text.primary">
          UI UX Design
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
