import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, path }) => {
  const handlePress = () => { //TODO: DELETE THIS
    console.log("AppBarTab pressed")
  }

  const styles = StyleSheet.create({
    tabContainer: {
      paddingHorizontal: 15,  //if these wouldnt exist, the tabTexts would be next to one another
      paddingVertical: 15
    },
    tabText: {
      color: "white",
      fontWeight: "bold"
    }
  });

  return (
    <View style={styles.tabContainer}>
      <Pressable onPress={handlePress}>
        <Link to={path}>
          <Text style={styles.tabText}>{text}</Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBarTab;