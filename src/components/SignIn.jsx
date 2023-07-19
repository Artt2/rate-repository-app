import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

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

const SignIn = () => {
  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignIn}>
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
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;