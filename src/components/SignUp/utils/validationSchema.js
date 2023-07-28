import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    .required("Username is required"),
  password: yup
    .string()
    .min(5)
    .max(30)
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirmation is required")
    .typeError("Password and confirmation don't match")
});

export default validationSchema;