/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

/*
  Currently only errors change the style.
  The styling of FormikTextInput could be done completely here,
  making each input identical (unless more style is added.)
*/
const styles = StyleSheet.create({
  errorBorder: {
    borderColor: "#d73a4a",
    borderWidth: 1
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  /*
    If there are validation errors, error is set to true by FormTextInput.
    Then more styling is added, a red border for the NativeTextInput.
  */
  if (error) {
    textInputStyle.push(styles.errorBorder);
  }

  return <NativeTextInput placeholderTextColor={theme.colors.textSecondary} style={textInputStyle} {...props} />;
};

export default TextInput;