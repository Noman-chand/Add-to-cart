import React from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from './SchemaYup';
import './FormikData.css'; // Import your CSS file for styling

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
};

function FormikData() {
  const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values, errors);
    }
  });

  return (
    <div className="container">
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error">{errors.name}</p>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error">{errors.email}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error">{errors.password}</p>
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="error">{errors.confirm_password}</p>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormikData;
