import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import BasicTable from "./BasicTablse";

const ariaLabel = { "aria-label": "description" };

export default function DetailsForm() {
  var getCostsAPIUrl = "http://3.121.239.158:3000/api/report/";
  const [user_id, setuser_id] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [historyData, setHistoryData] = useState([]);

  const getDetails = async () => {
    if (user_id && year && month) {
      getCostsAPIUrl = `http://3.121.239.158:3000/api/report/${month}/${year}/${user_id}`;
      try {
        const actualData = await fetch(getCostsAPIUrl).then((response) =>
          response.json()
        );
        setHistoryData(actualData);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          value={user_id}
          onInput={(e) => setuser_id(e.target.value)}
          placeholder="user_id"
          inputProps={ariaLabel}
        />
        <Input
          value={month}
          onInput={(e) => setMonth(e.target.value)}
          placeholder="Month"
          inputProps={ariaLabel}
        />
        <Input
          value={year}
          onInput={(e) => setYear(e.target.value)}
          placeholder="Year"
          inputProps={ariaLabel}
        />
        <Button variant="contained" onClick={getDetails}>
          Get
        </Button>
      </Box>

      <BasicTable historyData={historyData}></BasicTable>
    </div>
  );
}
