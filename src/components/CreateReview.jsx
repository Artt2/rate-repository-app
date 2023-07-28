import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import FormikTextInput from "./FormikTextInput";

import theme from "../theme";
import BlueButton from "./BlueButton";

import useReview from "../hooks/useReview";

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Repository owner name is required"),
  repositoryName: yup
    .string()
    .required(),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating is required")
    .typeError("Rating needs to be a number between 0 and 100"),
  text: yup
    .string()
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
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput
          style={styles.textInput}
          name="ownerName"
          placeholder="Repository owner name"
        />
        <FormikTextInput
          style={styles.textInput}
          name="repositoryName"
          placeholder="Repository name"
        />
        <FormikTextInput
          style={styles.textInput}
          name="rating"
          placeholder="Rating between 0 and 100"
        />
        <FormikTextInput
          style={styles.textInput}
          name="text"
          placeholder="Review"
        />
        <BlueButton text="Create a review" onPress={handleSubmit} />
      </View>
      )}
    </Formik>
  )
};

const CreateReview = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    console.log("creating a review...");

    try {
      const { data } = await createReview(values);

      navigate(`/${data.createReview.repositoryId}`);
      resetForm();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CreateReviewContainer onSubmit={handleSubmit} />
  );
};

export default CreateReview;