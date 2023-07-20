import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from "../graphql/queries.js"

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);  //why is this false at start?
  
  const result = useQuery(GET_REPOSITORIES, {
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