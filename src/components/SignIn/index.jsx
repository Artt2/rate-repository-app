import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import FormikTextInput from '../FormikTextInput';

import useSignIn from '../../hooks/useSignIn';
import BlueButton from '../BlueButton';

import styles from '../SignIn/styles';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
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