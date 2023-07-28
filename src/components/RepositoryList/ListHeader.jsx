import { View } from "react-native";

import OrderPicker from "./OrderPicker";
import SearchField from "./SearchField";

const ListHeader = () => {
  
  return (
    <View>
      <SearchField />
      <OrderPicker />
    </View>
  )
};

export default ListHeader;