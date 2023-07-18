import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text }) => {
  const handlePress = () => {
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
        <Text style={styles.tabText}>{text}</Text>
      </Pressable>
    </View>
  )
};

export default AppBarTab;