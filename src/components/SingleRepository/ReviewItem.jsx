import { View, StyleSheet } from "react-native";
import Text from "../Text";
import { format } from "date-fns";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  leftContainer: {
    flexDirection: "column",
    flex: 0.20,
  },
  rightContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 0.80,
    padding: 10,
    //flexGrow: 3
    //width: 300, //edit this later 
  },
  rating: {
    color: theme.colors.primary,  //color of text
    textAlign: "center",  //center text
    fontSize: 18,
    borderWidth: 4, //set border
    borderRadius: 30,  //makes a circle SET THIS TO 50% AND REMOVE WIDTH/HEIGHT
    borderColor: theme.colors.primary,  //border colorr
    width: 60,
    height: 60,
    alignSelf: "flex-start",  //align object to start of flex (left)
    padding: 15,  //space between text and border
    margin: 10 //space around border
  },
  name: {
    fontWeight: "bold",
    padding: 2,
  },
  createdAt: {
    color: theme.colors.textSecondary,
    padding: 2,
  },
  text: {
    color: theme.colors.textPrimary,
    padding: 2,
    width: "100%" //width is not infinitely long (all text in one line), its 100%
  }
});

const ReviewItem = ({ review }) => {

  const formattedDate = format(new Date(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.name}>{review.user.username}</Text>
        <Text style={styles.createdAt}>{formattedDate}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  )
};

export default ReviewItem;