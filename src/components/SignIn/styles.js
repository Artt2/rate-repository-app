import { StyleSheet } from "react-native";
import theme from "../../theme";

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

export default styles;