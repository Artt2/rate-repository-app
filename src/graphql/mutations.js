import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    authenticate(
      credentials: {
        username: $username,
        password: $password
      }
    
    ) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($input: CreateReviewInput) {
    createReview(review: $input) {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput) {
    createUser(user: $input) {
      id
    }
  }
`;