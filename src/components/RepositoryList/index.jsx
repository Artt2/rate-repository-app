import { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

import OrderContext from './contexts/OrderContext';

const RepositoryList = () => {
  const [order, setOrder] = useState("LATEST");
  const [keyword, setKeyword] = useState("");
  const [keywordDebounced] = useDebounce(keyword, 500);
  const { repositories } = useRepositories(order, keywordDebounced);

  return (
    <OrderContext.Provider value={{order, setOrder, keyword, setKeyword}}>
      <RepositoryListContainer repositories={repositories} />
    </OrderContext.Provider>
  );
};

export default RepositoryList;