import { View, StyleSheet} from "react-native";
import BottomInfoBar from "./BottomInfo";
import TopInfo from "./TopInfo";

const styles = StyleSheet.create({
  repositoryItem: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.repositoryItem}>
      <TopInfo item={item} />
      <BottomInfoBar item={item} />
    </View>   
  )
};

export default RepositoryItem;