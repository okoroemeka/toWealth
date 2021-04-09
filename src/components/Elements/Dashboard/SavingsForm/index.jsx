import { Box, Button } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiCall from "../../../../helper/Api";
import ChipSelect from "../../../Reusable/ChipSelect";
import InputUI from "../../../Reusable/InputUI";
import ModalUI from "../../../Reusable/ModalUI";
import CategoryForm from "../BudgetDashboard/CategoryForm";

export default function SavingsForm({ type, onClose, editTransaction, id }) {
  const [formDetails, setFormDetails] = useState({
    amount: "",
    date: "",
    description: "",
    categoryId: "",
    type: type,
  });
  const [categories, setCategories] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    ApiCall.getCall("category").then((res) => {
      setCategories(res.payload);
    });

    if (id) {
      ApiCall.getCall(`transaction/${id}`).then(
        (res) => {
          const { amount, date, description, categoryId, type } = res.payload;
          setFormDetails({
            amount,
            date: moment(date).format("YYYY-MM-DD"),
            description,
            categoryId,
            type,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, []);

  const categoryOptions = categories.map((cat) => {
    return {
      name: cat.categoryName,
      id: cat.id,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall.postCall("transaction", formDetails).then(
      () => {
        toast.success("Transaction Saved");
        onClose();
      },
      () => {
        toast.error("Something went wrong");
      }
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    ApiCall.patchCall(`transaction/${id}`, formDetails).then(
      () => {
        toast.success("Transaction Updated");
        onClose();
      },
      () => {
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <>
      <form onSubmit={editTransaction ? handleUpdate : handleSubmit}>
        <InputUI
          name="amount"
          required={true}
          label="Amount"
          type="number"
          value={formDetails.amount}
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
          name="categoryId"
          value={formDetails.categoryId}
          label="Category"
          onChange={(e) => handleChange(e)}
          options={categoryOptions}
          required={true}
          createCategory={() => setShowCategoryModal(true)}
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
        <ModalUI
          onOpen={showCategoryModal}
          onClose={() => {
            setShowCategoryModal(!showCategoryModal);
          }}
          title="New Category"
        >
          <CategoryForm
            onClose={() => {
              ApiCall.getCall("category").then((res) => {
                setCategories(res.payload);
              });
              setShowCategoryModal(!showCategoryModal);
            }}
          />
        </ModalUI>
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
