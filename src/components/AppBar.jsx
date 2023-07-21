import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';
//import useUser from '../hooks/useUser'; //not sure if needed at all

import { GET_USER } from '../graphql/queries';
import { useQuery } from '@apollo/client';


import { useAuthStorage } from '../hooks/useAuthStorage';
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

  console.log(`GET_USER query data.me: ${me}`);

  const signOut = async () => {
    console.log("signing out...")
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return ( 
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab text={"Repositories"} path="/" />
        {me ? (
          <>
            <AppBarTab text={"Sign Out"} path="/" signOut={signOut} />          
          </>
        ) : (
          <>
            <AppBarTab text={"Sign in"} path="/signin" />
          </>
        )}
      </ScrollView>
    </View>
  )
};

export default AppBar;

/*
  Query doesnt work in the app, but it does in apollo explorer.
  createAplloClient sets the header, but does it update it? 

  Setting authorization in createApolloClient as "Bearer [string of token here]" works.
  It seems that the accesstoken isnt updated to the authorization header once the user signs in.
*/