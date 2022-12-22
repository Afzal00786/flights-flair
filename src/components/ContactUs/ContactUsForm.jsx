import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contactUs.css";
export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("This field is required."),
  lastName: Yup.string().min(2).max(25).required("This field is required."),

  email: Yup.string().email().required("This field is required."),
  message: Yup.string().min(6).required("This field is required."),
});
const initialValues = {
  name: "",
  lastName: "",
  email: "",
  message: "",
};

const ContactUsForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="name_form_wrapper">
          <label htmlFor="name" className="name_text">
            Name
          </label>
          <div className="name_fields">
            <div className="input_field_wrapper">
              <input
                type="name"
                autoComplete="off"
                className="input_Field"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
              <div className="text">first</div>
            </div>
            <div className="input_field_wrapper">
              <input
                className="input_Field"
                type="lastName"
                autoComplete="off"
                name="lastName"
                id="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <p className="form-error">{errors.lastName}</p>
              ) : null}
              <div className="text">last</div>
            </div>
          </div>
        </div>
        <div className="name_form_wrapper">
          <div className="input_field_wrapper">
            <label htmlFor="email" className="text_heading">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Email"
              className="input_Field"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="name_form_wrapper">
          <div className="input_field_wrapper">
            <label htmlFor="email" className="text_heading">
              Comment or Message
            </label>
            <textarea
              type="message"
              autoComplete="off"
              name="message"
              className="input_Field"
              id="message"
              placeholder="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="8"
            />
            {errors.message && touched.message ? (
              <p className="form-error">{errors.message}</p>
            ) : null}
          </div>
        </div>
        <div className="modal-buttons">
          <button className="submit_styling" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactUsForm;
