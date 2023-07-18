import { View, StyleSheet, Image } from "react-native";
import Text from "../Text";

import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  columnContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  image : {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  fullName: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  description: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  language: {
    color: "white",
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginLeft: 5
  }
});

const TopInfo = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.columnContainer}>
        <Image style={styles.image}source={{uri: item.ownerAvatarUrl}}></Image>
      </View>
      <View style={styles.columnContainer}>
        <Text style={styles.fullName}>
          {item.fullName}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.language}>
          {item.language}
        </Text>
      </View>
    </View>   
  )
};

export default TopInfo;