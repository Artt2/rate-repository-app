import { View } from "react-native";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";

import FormikTextInput from "../FormikTextInput";
import BlueButton from "../BlueButton";

import styles from "./styles";
import validationSchema from "./utils/validationSchema";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
}

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput
          style={styles.textInput}
          name="username"
          placeholder="Username"
        />
        <FormikTextInput
          style={styles.textInput}
          name="password"
          placeholder="Password"
          secureTextEntry={true}
        />
        <FormikTextInput
          style={styles.textInput}
          name="passwordConfirmation"
          placeholder="Password confirmation"
          secureTextEntry={true}
        />
      <BlueButton text="Sign Up" onPress={handleSubmit} />
      </View>
      )}
    </Formik>
  )
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await signUp(values);  //eslint-disable-line

      const { data2 } = await signIn({  //eslint-disable-line
        username: values.username, 
        password: values.password,
      })

      navigate("/");
      resetForm();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <SignUpContainer onSubmit={handleSubmit} />
  );
};

export default SignUp;