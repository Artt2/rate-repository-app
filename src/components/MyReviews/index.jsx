import { FlatList} from "react-native";

import ReviewItem from "../SingleRepository/ReviewItem.jsx";
import useUser from "../../hooks/useUser.js";
import ItemSeparator from "../ItemSeparator.jsx";

import Text from "../Text.jsx";

const MyReviews = () => {
  const { user } = useUser(true);
  
  const reviews = user ? user.reviews.edges.map(edge => edge.node) : []

  if (reviews.length === 0) {
    return <Text>No reviews yet!</Text>
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  )
};

export default MyReviews;