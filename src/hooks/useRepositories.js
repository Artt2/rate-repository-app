import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from "../graphql/queries.js"

const useRepositories = (order, keyword) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);  //why is this false at start?
  
  /*
    order => result

    LATEST => CREATED_AT & DESC
    HIGHEST => RATING_AVERAGE & DESC
    LOWEST => RATING_AVERAGE & ASC
  */
  const variables = {
    orderBy: order === "LATEST" ? "CREATED_AT" : "RATING_AVERAGE",
    orderDirection: order === "LOWEST" ? "ASC" : "DESC",
    searchKeyword: keyword
  };

  const result = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: "cache-and-network",
  });
  
  useEffect(() => {
    if (!result.loading && result.data) { //if not loading and data found, set it
      setLoading(false);
      setRepositories(result.data.repositories);
    }
  }, [result.data, result.loading]);  //when data/loading changes, useEffect gets called

  return { repositories, loading, refetch: () => setLoading(true) };  //dont know if refetch works
};

export default useRepositories;