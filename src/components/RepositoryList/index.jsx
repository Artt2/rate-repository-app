import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

import OrderContext from './contexts/OrderContext';

//TODO: useRepositories query with order
const RepositoryList = () => {
  const [order, setOrder] = useState("LATEST");
  const { repositories } = useRepositories(order);

  return (
    <OrderContext.Provider value={{order, setOrder}}>
      <RepositoryListContainer repositories={repositories} />
    </OrderContext.Provider>
  );
};

export default RepositoryList;