import { View, Pressable, StyleSheet } from "react-native";
import Text from "../Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, path, signOut }) => {
  const handlePress = () => { //this gets activated onlyby Link's onPress
    if (text === "Sign Out") {  //sign out only if this is the "Sign Out" tab
      signOut();
    }
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
        <Link to={path} onPress={handlePress}>
          <Text style={styles.tabText}>{text}</Text>
        </Link>
      </Pressable>
    </View>
  )
};

export default AppBarTab;