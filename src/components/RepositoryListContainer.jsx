import { FlatList, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

const renderItem = ({ item, navigate }) => {

  const handlePress = () => {
    navigate(`/${item.id}`);  //redirect to single RepositoryView
  };

  return (
    <Pressable onPress={handlePress}>
      <RepositoryItem item={item} />
    </Pressable>
  )
};

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => renderItem({ item, navigate })}
    />
  );
};

export default RepositoryListContainer;