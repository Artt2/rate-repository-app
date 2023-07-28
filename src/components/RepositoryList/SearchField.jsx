import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import OrderContext from "./contexts/OrderContext";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  searchBar: {
    margin: 10,
  },
});

const SearchField = () => {
  const { keyword, setKeyword } = useContext(OrderContext);

  const search = (value) => {
    setKeyword(value);
  };

  return (
    <View style={styles.container}>
      <Searchbar 
        placeholder="Search"
        onChangeText={search}
        value={keyword}
        style={styles.searchBar}
      />
    </View>
  );
};

export default SearchField;