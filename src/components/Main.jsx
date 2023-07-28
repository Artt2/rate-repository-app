import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import SignIn from "./SignIn/index.jsx";
import SingleRepository from './SingleRepository/index.jsx';
import CreateReview from './CreateReview/index.jsx';
import SignUp from './SignUp/index.jsx';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/:id" element={<SingleRepository />} exact />
        <Route path="/review" element={<CreateReview />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;

/*
  <Route path="/" element={<RepositoryList />} exact />
  <Route path="/signin" element={<SignIn />} exact />

  <Route path="/" element={<SignIn />} exact />
  <Route path="/signin" element={<RepositoryList />} exact />
*/