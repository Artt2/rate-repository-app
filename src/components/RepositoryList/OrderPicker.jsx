import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import OrderContext from "./contexts/OrderContext";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

const OrderPicker = () => {
  const { order, setOrder } = useContext(OrderContext);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={order}
        onValueChange={(value) => setOrder(value)}
      >
        <Picker.Item label="Latest repositories" value="LATEST" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST" />
      </Picker>
    </View>
  )
};

export default OrderPicker;