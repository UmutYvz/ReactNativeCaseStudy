import React, {FC} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import StackNavigator from '../../navigator/AppNavigation';

const Main: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Main;
