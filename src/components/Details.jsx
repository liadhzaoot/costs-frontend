import React, { useState } from "react";
import Button from "@mui/material/Button";
import DetailsForm from "./DetailsForm";

export default function Details() {
  const [showForm, setShowForm] = useState(false);
  const ShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Button
        style={{ margin: "20px 20px" }}
        variant="contained"
        onClick={ShowForm}
      >
        Get Details
      </Button>
      {showForm && <DetailsForm />}
    </div>
  );
}
