import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles =  StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  columnContainer: {
    flexDirection: "column"
  }
});

const formatNumbers = (number) =>  {
  if (Number(number) < 1000) {
    return number;
  }

  Math.floor(number / 1000) / 10;
  const roundedValue = Math.fround(parseFloat(number) / 100) / 10;
  return roundedValue.toFixed(1) + "k";
}

const BottomInfoBar = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <Text fontWeight={"bold"}>{formatNumbers(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.columnContainer}>
      <Text fontWeight={"bold"}>{formatNumbers(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.columnContainer}>
      <Text fontWeight={"bold"}>{formatNumbers(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.columnContainer}>
      <Text fontWeight={"bold"}>{formatNumbers(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>   
  )
};

export default BottomInfoBar;

/*
  Old implementation

  <View style={styles.rowContainer}>
    <Text fontWeight={"bold"}>{formatNumbers(item.stargazersCount)}</Text>
    <Text fontWeight={"bold"}>{formatNumbers(item.forksCount)}</Text>
    <Text fontWeight={"bold"}>{formatNumbers(item.reviewCount)}</Text>
    <Text fontWeight={"bold"}>{formatNumbers(item.ratingAverage)}</Text>
  </View>
  <View style={styles.rowContainer}>
    <Text>Stars</Text>
    <Text>Forks</Text>
    <Text>Reviews</Text>
    <Text>Rating</Text>
  </View>
*/