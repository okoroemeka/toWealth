import { Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import ApiCall from "../../../../helper/Api";
import InputUI from "../../../Reusable/InputUI/index";
import ChipSelect from "../../../Reusable/ChipSelect";
import { toast } from "react-toastify";

export default function CategoryForm({ onClose }) {
  const [formDetails, setFormDetails] = useState({
    categoryName: "",
    type: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall.postCall("category", formDetails).then(
      () => {
        toast.success("Category Added");
        onClose();
      },
      (err) => {
        toast.err(err.status);
      }
    );
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputUI
          name="categoryName"
          label="Category Name"
          required={true}
          value={formDetails.categoryName}
          onChange={(e) => {
            console.log(e);
            handleChange(e);
          }}
        />
        <ChipSelect
          name="type"
          value={formDetails.type}
          label="Category Type"
          onChange={(e) => handleChange(e)}
          options={[
            { name: "income", id: "income" },
            { name: "expense", id: "expense" },
          ]}
          required={true}
        />
        <Box
          marginTop={2}
          marginBottom={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button type="button" variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="primary">
            Save Category
          </Button>
        </Box>
      </form>
    </>
  );
}
