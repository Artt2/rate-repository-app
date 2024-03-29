import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "../RepositoryItem";
import ItemSeparator from "../ItemSeparator";
import ReviewItem from "./ReviewItem";
import { GET_REPOSITORY } from "../../graphql/queries";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  }
});

const SingleRepository = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_REPOSITORY, { //eslint-disable-line
    fetchPolicy: "cache-and-network",
    variables: { id },
  });

  //return null if query not ready 
  if (loading) {
    return null;
  }
  
  const repositoryItem = data?.repository;
  const reviews = data?.repository.reviews.edges.map(edge => edge.node);

  if (reviews.length === 0) {
    return (<RepositoryItem item={repositoryItem} view={true} />)
  }

  const all = [repositoryItem].concat(reviews);

  return (
    <View style={styles.container}>
      <FlatList
        data={all}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => { 
        
          return index === 0 ? (<RepositoryItem item={repositoryItem} view={true} />) : (<ReviewItem review={item} />)
        
          }
        }
      />
    </View>
  )
};

export default SingleRepository;