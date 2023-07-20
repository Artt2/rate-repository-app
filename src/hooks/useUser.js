import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/queries";

const useUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const result = useQuery(GET_USER, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!result.loading && result.data) { //if not loading and data found, set it
      setLoading(false);
      setUser(result.data.me);
    }
  }, [result.data, result.loading]);  //when data/loading changes, useEffect gets called

  return { user, loading } //, refetch: () => setLoading(true) };  //dont know if refetch works
};

export default useUser;