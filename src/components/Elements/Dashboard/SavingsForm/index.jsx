import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import ChipSelect from "../../../Reusable/ChipSelect";
import InputUI from "../../../Reusable/InputUI";

export default function SavingsForm({ type, onClose }) {
  const [formDetails, setFormDetails] = useState({
    amount: "",
    date: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormDetails((prev) => {
      const { value, name } = e.target;
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <form>
        <InputUI
          name="amount"
          label="Amount"
          required={true}
          value={formDetails.amount}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <InputUI
          name="date"
          required={true}
          type="date"
          value={formDetails.date}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <InputUI
          name="description"
          label="Description"
          required={true}
          value={formDetails.description}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <ChipSelect
          name="category"
          value={formDetails.category}
          label="Category"
          onChange={(e) => handleChange(e)}
          options={["food", "education", "miscellaneous"]}
          required={true}
        />
        <Box
          marginTop={2}
          marginBottom={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button type="button" variant="text" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
}
