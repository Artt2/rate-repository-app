import { View, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView horizontal={true}>
        <AppBarTab text={"Repositories"} path="/" />
        <AppBarTab text={"Sign in"} path="/signin" />
      </ScrollView>
    </View>
  )
};

export default AppBar;