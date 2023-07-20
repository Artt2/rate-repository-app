import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import useUser from '../hooks/useUser'; //not sure if needed at all

import { GET_USER } from '../graphql/queries';

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

  const signOut = async () => {
    console.log("signing out...")
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }
  const getToken = async () => {
    const accessToken = await authStorage.getAccessToken();
    console.log(`current accessToken: ${accessToken}`);
  }
  getToken();
  const me = data?.me;
  
  if (me === null) {
    console.log("user not authenticated, null")
  } else if (me === undefined) {
    console.log("user is undefined, waiting...")
  } else {
    console.log(`user found: ${me}`)
  }

  return ( 
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <AppBarTab text={"Repositories"} path="/" />
        {me ? (
            <AppBarTab text={"Sign Out"} path="/" onPress={signOut} />
        ) : (
          <>
            <AppBarTab text={"Sign in"} path="/signin" />
            <AppBarTab text={"Sign Out"} path="/" signOut={signOut} />
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
  It seems that the accesstoken isnt updated to the authorization header.
*/