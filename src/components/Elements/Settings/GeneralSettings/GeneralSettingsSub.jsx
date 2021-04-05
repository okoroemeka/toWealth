import React, { useEffect, useState } from "react";

import Select from "../../../UI/Select";
import Button from "../../../UI/CustomButton";
import Switch from "../../../UI/Switch";
import Line from "../../../UI/Line";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";

const GeneralSettingsSub = (props) => {
  const [generalSettings, setGeneralSettings] = useState({
    language: "",
    darkMode: false,
    currency: "",
    country: "",
  });

  useEffect(() => {
    ApiCall.getCall("settings/get-general-settings").then(
      (res) => {
        setGeneralSettings(res.payload);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const handleChange = (e, name) => {
    console.log(generalSettings.darkMode);
    setGeneralSettings((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiCall.putCall("settings/update-general-settings", generalSettings).then(
      () => {
        toast.success("General Settings Updated");
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__item">
        <h5 className="general__settings__item__title">Dark mode</h5>
        <Switch
          handleChange={(e) =>
            setGeneralSettings((prev) => {
              return { ...prev, darkMode: e.target.checked };
            })
          }
          checked={generalSettings.darkMode}
          color={generalSettings.darkMode ? "#347af0" : "secondary"}
        />
        <Line borderColor="#E4E7EB" />
      </div>
      <div className="form__item">
        <Select
          id="languages"
          handleChange={(e) => handleChange(e, "language")}
          selectedValue={generalSettings.language}
          label="Languages"
          options={[
            { name: "English", value: "English" },
            { name: "French", value: "French" },
            { name: "German", value: "German" },
          ]}
        />
      </div>
      <div className="form__item">
        <Select
          id="country"
          selectedValue={generalSettings.country}
          handleChange={(e) => handleChange(e, "country")}
          label="Country"
          options={[
            { name: "United States", value: "United States" },
            { name: "France", value: "France" },
            { name: "Nigeria", value: "Nigeria" },
            { name: "Germany", value: "Germany" },
          ]}
        />
      </div>
      <div className="form__item">
        <Select
          id="currency"
          selectedValue={generalSettings.currency}
          handleChange={(e) => handleChange(e, "currency")}
          label="Currency"
          options={[
            { name: "USD", value: "USD" },
            { name: "NGN", value: "NGN" },
            { name: "EUR", value: "EUR" },
          ]}
        />
      </div>
      <Button type="submit" title="Save" />
    </form>
  );
};

export default GeneralSettingsSub;
