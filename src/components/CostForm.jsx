import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const ariaLabel = { "aria-label": "description" };

export default function CostForm() {
  const addCostAPIUrl = "http://localhost:3030/api/costs";
  const [user_id, setuser_id] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [sum, setSum] = useState("");

  const addCost = async () => {
    if (user_id && description && category && sum) {
      console.log(user_id);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id,
          category,
          description,
          sum,
        }),
      };
      try {
        const actualData = await fetch(addCostAPIUrl, requestOptions).then(
          (response) => response.json()
        );
        console.log(actualData);
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
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
        value={category}
        onInput={(e) => setCategory(e.target.value)}
        placeholder="category"
        inputProps={ariaLabel}
      />
      <Input
        value={description}
        onInput={(e) => setDescription(e.target.value)}
        placeholder="description"
        inputProps={ariaLabel}
      />
      <Input
        value={sum}
        onInput={(e) => setSum(parseInt(e.target.value))}
        placeholder="sum"
        inputProps={ariaLabel}
      />
      <Button variant="contained" onClick={addCost}>
        Add
      </Button>
    </Box>
  );
}
