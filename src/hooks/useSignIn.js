import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import { useAuthStorage } from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  /*
    mutate: the function for SIGN_IN
    result: the result for mutate
  */
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const variables = { variables: { username, password } }

    const result = await mutate(variables);

    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    
    /*
    console.log(`setting access token: ${result.data.authenticate.accessToken}`);
    const test = await authStorage.getAccessToken();
    console.log("getAccessToken: ", test);
    */

    apolloClient.resetStore();
    return result;
  };

  return [signIn, result];
};

export default useSignIn;