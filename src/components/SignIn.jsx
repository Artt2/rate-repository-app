import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import FormikTextInput from './FormikTextInput';

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import BlueButton from './BlueButton';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  textInput: {  //this styling could be done in FormikTextInput as well
    color: theme.colors.textPrimary,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  }
});

const initialValues = {
  username: "",
  password: "",
};
/*
  Pure container for SignIn.
*/
const SignInContainer = ({ onSubmit }) => {
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
          <BlueButton text={"Sign in"} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSignIn = async (values, { resetForm }) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });  //eslint-disable-line
      //console.log(data);

      navigate("/");  //redirect to repositories

      resetForm();  //reset fields of form
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <SignInContainer onSubmit={handleSignIn} />
  )
};

export default SignIn;
export { SignInContainer };