import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackGround,
    //no horizontal/vertical padding here, its done in AppBarTab
  },
  // ...
});

const AppBar = () => {
  return ( 
    <View style={styles.container}>
      <AppBarTab text={"Repositories"} />
    </View>
  )
};

export default AppBar;