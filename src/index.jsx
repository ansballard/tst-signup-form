import React, { useState } from "react";
import ReactDOM from "react-dom";

import { main, form, header, invalidStyle, validStyle } from "./styles.js";

const initialForm = {
  username: "",
  password: "",
  confirmPassword: "",
};
const initialDirty = {
  password: false,
  confirmPassword: false,
};

const Form = () => {
  const [{ username, password, confirmPassword }, setForm] = useState(initialForm);
  const [dirty, setDirty] = useState(initialDirty);
  const [valid, setValid] = useState(false);

  function validatePassword(key) {
    console.log(key, "validate");
    setDirty((dirty) => ({
      ...dirty,
      [key]: true,
    }));
    setValid(password === confirmPassword && password !== "");
  }

  function clearForm() {
    setForm(initialForm);
    setDirty(initialDirty);
    setValid(false);
  }

  function onChange(key, value) {
    setForm((form) => ({
      ...form,
      [key]: value
    }))
  }

  const showError = dirty.password && dirty.confirmPassword && !valid;
  const passwordsMatch = dirty.password && dirty.confirmPassword && valid;

  return (
    <main className={main}>
      <header className={header}>
        <h1>TST Signup Form</h1>
      </header>
      <form className={form}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => onChange("username", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange("password", e.target.value)}
            onBlur={() => validatePassword("password")}
          />
        </div>
        <div className={`form-group ${showError ? invalidStyle : ""}`}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => onChange("confirmPassword", e.target.value)}
            onBlur={() => validatePassword("confirmPassword")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clear">Clear</label>
          <button
            type="button"
            id="clear"
            onClick={clearForm}
          >
            Clear
          </button>
        </div>
        {(showError || passwordsMatch) ? <div className={showError ? invalidStyle : validStyle}>
          Your passwords {showError ? "do not " : ""}match!
        </div> : null}
      </form>
    </main>
  )
};

ReactDOM.render(<Form />, document.getElementById("root"));
