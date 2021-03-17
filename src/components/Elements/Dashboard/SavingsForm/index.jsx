import React, { useState } from "react";
import Input from "../../../Reusable/Input";
import Card from "../../../UI/Card";
import CardHeader from "../../../UI/CardHeader";

export default function SavingsForm({ formTitle, type, toggleModal, cardRef }) {
  const [formDetails, setFormDetails] = useState({
    amount: "",
    date: "",
    description: "",
    category: "",
    wallet: "",
  });

  const handleChange = (e) => {
    setFormDetails((prev) => {
      const { value, name } = e.target;
      return { ...prev, [name]: value };
    });
  };
  return (
    <Card classname="col-sm-12 col-l-4">
      <div ref={cardRef} className="card__content" onBlur={() => null}>
        <CardHeader handleCancel={toggleModal} cardTitle={formTitle} />
        <form>
          <fieldset className="fieldset" disabled={false}>
            <Input
              labelTitle="Amount"
              inputType="number"
              inputName="amount"
              inputValue={formDetails.amount}
              handleChange={handleChange}
              required
            />
          </fieldset>
        </form>
      </div>
    </Card>
  );
}
