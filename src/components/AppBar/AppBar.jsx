import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
//import useUser from '../hooks/useUser'; //not sure if needed at all

import { GET_USER } from '../../graphql/queries';
import { useQuery } from '@apollo/client';


import { useAuthStorage } from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const { data } = useQuery(GET_USER);

  const me = data?.me;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return ( 
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab text={"Repositories"} path="/" />
        {me ? (
          <>
            <AppBarTab text="Create a review" path="/review" />
            <AppBarTab text="My reviews" path="/myreviews" />
            <AppBarTab text={"Sign Out"} path="/" signOut={signOut} />          
          </>
        ) : (
          <>
            <AppBarTab text={"Sign in"} path="/signin" />
            <AppBarTab text={"Sign up"} path="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  )
};

export default AppBar;