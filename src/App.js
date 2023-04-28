import React, { useState } from "react";
import "./App.css";
import validation from "./Validation";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  function handleSubmit() {
    console.log("=====>", validation(values));
    setErrors(validation(values));
  }

  return (
    <div>
      <div className="App">
        <div className="container">
          <div>
            <label>
              FirstName
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="enter first name"
              name="firstName"
              value={values.firstName}
              onChange={(e) => handleChange(e)}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>

          <div>
            <label>
              LastName
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="enter last name"
              name="lastName"
              value={values.lastName}
              onChange={(e) => handleChange(e)}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>

          <div>
            <label>
              Email
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>
              password
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <button onClick={() => handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
