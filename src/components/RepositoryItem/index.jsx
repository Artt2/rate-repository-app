import { View, StyleSheet, Pressable} from "react-native";
import { useNavigate } from "react-router-native";
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
  const navigate = useNavigate();

  const handlePress = () => {
    navigate(`/${item.id}`);  //redirect to single RepositoryView
  };

  const onPress = () => {
    console.log(`opening: ${item.url}`);
    Linking.openURL(item.url);
  }

  return (
    <View testID={"repositoryItem"} style={styles.repositoryItem}>
      <Pressable onPress={handlePress}>
        <TopInfo item={item} />
        <BottomInfoBar item={item} />
      </Pressable>
      {view && <BlueButton text={"Open in GitHub"} onPress={onPress}/>}
    </View>   
  )
};

export default RepositoryItem;