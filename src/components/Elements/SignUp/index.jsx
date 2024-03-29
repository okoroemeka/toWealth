import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { navigate } from "@reach/router";
import CircularProgress from "@material-ui/core/CircularProgress";

import Error from "../../Reusable/Error";
import eyeIcon from "../../../assets/images/eye.svg";
import userSignup from "../../../store/actions/signup";
import {
  emailValidator,
  passwordValidator,
  validateFullName,
} from "../../../utils/Validation";
import "./index.scss";

const Signup = ({ toggleAuth }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [fullNameTouched, setFullNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  // const { authLogin, signup } = useSelector((store) => store);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      dispatch(userSignup({ fullname: fullName.trim(), email, password }));
      setLoading(false);
      navigate("/dashboard/dashboard");
    } catch ({ message }) {
      setLoading(false);
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    if (
      !validateFullName(fullName) &&
      emailValidator(email) &&
      passwordValidator(password)
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [email, fullName, password]);

  // if (authLogin.isLoggedIn || signup.isLoggedIn)
  //   return <Redirect noThrow to='/dashboard/dashboard' />;

  return (
    <div className="signup__form__wrapper">
      {errorMessage ? <Error errorMessage={errorMessage} /> : null}
      <form className="signup__form" onSubmit={(e) => handleSignup(e)}>
        <div className="input__wrapper">
          <input
            onBlur={() => setFullNameTouched(true)}
            type="text"
            value={fullName}
            placeholder="Full name"
            required
            onChange={(event) => setFullName(event.target.value)}
          />
          {validateFullName(fullName) && fullNameTouched ? (
            <h6 className="input__error">
              name must be greater than one character
            </h6>
          ) : null}
        </div>
        <div className="input__wrapper">
          <input
            type="email"
            onBlur={() => setEmailTouched(true)}
            value={email}
            placeholder="Email Address"
            required
            onChange={(event) => setEmail(event.target.value.trim())}
          />
          {!emailValidator(email) && emailTouched ? (
            <h6 className="input__error">invalid email</h6>
          ) : null}
        </div>

        <div className="input__wrapper">
          <input
            onBlur={() => setPasswordTouched(true)}
            className="password__field"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value.trim())}
          />
          <img
            src={eyeIcon}
            alt="eye icon"
            className="eye__icon"
            onClick={() => setShowPassword(!showPassword)}
          />
          {!passwordValidator(password) && passwordTouched ? (
            <h6 className="input__error">
              password must be between 8 and 15 characters, alhanumeric and have
              a special charecter
            </h6>
          ) : null}
        </div>
        <div className="button__wrapper">
          <button
            type="submit"
            className="signup__button"
            disabled={loading || !validForm}
          >
            {!loading ? (
              "Sign up"
            ) : (
              <CircularProgress color="#ffffff" size={16} />
            )}
          </button>
        </div>
      </form>
      <div className="account__wrapper">
        <h5 className="account__text">Already have an account?</h5>
        <h5 className="account__signup" onClick={toggleAuth}>
          Login
        </h5>
      </div>
    </div>
  );
};

export default Signup;
