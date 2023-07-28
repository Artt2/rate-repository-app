import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const apolloClient = useApolloClient();

  const signUp = async ({ username, password }) => {
    const result = await mutate({variables: { input : {
      username,
      password
    }}});

    apolloClient.resetStore();
    return result;
  };

  return [signUp, result];
};

export default useSignUp;