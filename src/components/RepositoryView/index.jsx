import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import RepositoryItem from "../RepositoryItem";
import { GET_REPOSITORY } from "../../graphql/queries";

const RepositoryView = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REPOSITORY, { //eslint-disable-line
    variables: { id },
  });

  const item = data?.repository;

  //return null if query not ready 
  if (loading) {
    return null;
  }

  return (
    <>
      <RepositoryItem item={item} view={true} />
    </>
  )
};

export default RepositoryView;