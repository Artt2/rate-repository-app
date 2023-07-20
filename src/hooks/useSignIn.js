import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  /*
    mutate: the function for SIGN_IN
    result: the result for mutate
  */
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const variables = { variables: { username, password } }

    return mutate(variables);
  };

  return [signIn, result];
};

export default useSignIn;