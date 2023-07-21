import { View, StyleSheet} from "react-native";
import * as Linking from "expo-linking";

import TopInfo from "./TopInfo";
import BottomInfoBar from "./BottomInfo";

import BlueButton from "../BlueButton";

const styles = StyleSheet.create({
  repositoryItem: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});

const RepositoryItem = ({ item, view }) => {

  const onPress = () => {
    console.log(`opening: ${item.url}`);
    Linking.openURL(item.url);
  }

  return (
    <View testID={"repositoryItem"} style={styles.repositoryItem}>
      <TopInfo item={item} />
      <BottomInfoBar item={item} />
      {view && <BlueButton text={"Open in GitHub"} onPress={onPress}/>}
    </View>   
  )
};

export default RepositoryItem;