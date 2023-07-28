import { FlatList} from "react-native";

import ReviewItem from "../SingleRepository/ReviewItem.jsx";
import useUser from "../../hooks/useUser.js";
import ItemSeparator from "../ItemSeparator.jsx";

const MyReviews = () => {
  const { user } = useUser(true);
  
  const reviews = user ? user.reviews.edges.map(edge => edge.node) : []

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