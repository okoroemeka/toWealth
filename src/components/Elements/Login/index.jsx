import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigate, Redirect } from "@reach/router";
import CircularProgress from "@material-ui/core/CircularProgress";
import login from "../../../store/actions/login";
import eyeIcon from "../../../assets/images/eye.svg";
import InputError from "../../Reusable/Error/InputError";

import { emailValidator, passwordValidator } from "../../../utils/Validation";

import "./login.scss";

const Login = ({ toggleAuth }) => {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { authLogin, signup } = useSelector((store) => store);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await dispatch(login({ email, password }));
      setLoading(false);
      navigate("/dashboard/dashboard");
    } catch ({ message }) {
      setLoading(false);
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    if (emailValidator(email) && passwordValidator(password)) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [email, password]);

  if (authLogin.isLoggedIn || signup.isLoggedIn)
    return <Redirect noThrow to="/dashboard/dashboard" />;

  return (
    <div className="login__form__wrapper">
      {errorMessage ? <InputError errorText={errorMessage} /> : null}

      <form className="login__form" onSubmit={(e) => handleLogin(e)}>
        <div className="input__wrapper">
          <input
            type="email"
            value={email}
            onBlur={() => setEmailTouched(true)}
            placeholder="Email Address"
            required
            onChange={(event) => setEmail(event.target.value.trim())}
          />
          {!emailValidator(email) && emailTouched ? (
            <InputError errorText="invalid email" />
          ) : null}
        </div>
        <div className="input__wrapper">
          <input
            className="password__field"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            required
            onBlur={() => setPasswordTouched(true)}
            onChange={(event) => setPassword(event.target.value.trim())}
          />
          <img
            src={eyeIcon}
            alt="eye icon"
            className="eye__icon"
            onClick={() => setShowPassword(!showPassword)}
          />
          {!passwordValidator(password) && passwordTouched ? (
            <InputError
              errorText="password must be between 8 and 15 characters, alhanumeric and have
              a special charecter"
            />
          ) : null}
        </div>

        <div className="forgot__password__wrapper">
          <span className="forgot__password" onClick={() => {}}>
            Forgot your password?
          </span>
        </div>
        <div className="button__wrapper">
          <button
            type="submit"
            className="login__button"
            disabled={loading || !validForm}
          >
            {!loading ? (
              "Login"
            ) : (
              <CircularProgress color="#ffffff" size={16} />
            )}
          </button>
        </div>
      </form>
      <div className="no__account__wrapper">
        <h5 className="no__account__text">Don’t have an account?</h5>
        <h5 className="no__account__signup" onClick={toggleAuth}>
          Sign Up
        </h5>
      </div>
    </div>
  );
};

export default Login;
