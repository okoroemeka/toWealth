import { Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import InputUI from "../../../Reusable/InputUI/index";
import ChipSelect from "../../../Reusable/ChipSelect";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";
import ModalUI from "../../../Reusable/ModalUI";
import CategoryForm from "./CategoryForm";
// import "../GoalForm/editCard.scss";

export default function BudgetForm({ onClose }) {
  const [categories, setCategories] = useState([]);
  const [formDetails, setFormDetails] = useState({
    categoryId: "",
    description: "",
    budget: "",
  });
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall.postCall("budget", formDetails).then(
      () => {
        toast.success("Budget Created");
        onClose();
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    ApiCall.getCall("category").then((res) => {
      setCategories(res.payload);
    });
  }, []);

  const categoryOptions = categories.map((cat) => {
    return {
      name: cat.categoryName,
      id: cat.id,
    };
  });

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ChipSelect
          name="categoryId"
          value={formDetails.categoryId}
          label="Category"
          onChange={(e) => handleChange(e)}
          options={categoryOptions}
          createCategory={() => setShowCategoryModal(true)}
          required={true}
        />
        <ModalUI
          onOpen={showCategoryModal}
          onClose={async () => {
            await ApiCall.getCall("category").then((res) => {
              setCategories(res.payload);
            });
            setShowCategoryModal(!showCategoryModal);
          }}
          title="New Category"
        >
          <CategoryForm
            onClose={() => setShowCategoryModal(!showCategoryModal)}
          />
        </ModalUI>
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
            Save Budget
          </Button>
        </Box>
      </form>
    </>
  );
}
