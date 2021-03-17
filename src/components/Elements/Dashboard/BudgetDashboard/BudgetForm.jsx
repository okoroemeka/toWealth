import { Box, Button, CardHeader } from "@material-ui/core";
import React, { useState } from "react";
import InputUI from "../../../Reusable/InputUI/index";
import ChipSelect from "../../../Reusable/ChipSelect";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";
// import "../GoalForm/editCard.scss";

export default function BudgetForm({ onClose }) {
  const [formDetails, setFormDetails] = useState({
    category: "",
    description: "",
    budget: "",
    actual: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall.postCall("budget", formDetails).then(() => {
      toast.success("Budget Created");
      onClose();
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ChipSelect
          name="category"
          value={formDetails.category}
          label="Category"
          onChange={(e) => handleChange(e)}
          options={["food", "education", "miscellaneous"]}
          required={true}
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
        <InputUI
          name="budget"
          label="Budget"
          required={true}
          type="number"
          value={formDetails.budget}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <InputUI
          name="actual"
          label="Actual"
          required={true}
          value={formDetails.actual}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Box
          marginTop={2}
          marginBottom={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button type="submit" variant="outlined" color="primary">
            Save Budget
          </Button>
        </Box>
      </form>
    </>
  );
}
