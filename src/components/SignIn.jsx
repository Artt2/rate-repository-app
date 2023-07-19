import { View, Pressable, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  textInput: {
    color: theme.colors.textSecondary,
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
    //alignSelf: "center",
  }
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues}>
      <View style={styles.container}>
        <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
        <FormikTextInput style={styles.textInput} name="password" placeholder="Password" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </Formik>
  );
};

export default SignIn;