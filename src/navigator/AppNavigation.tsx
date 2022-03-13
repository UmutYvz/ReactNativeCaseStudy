import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../pages/ListPage/ListScreen';
import DetailScreen from '../pages/DetailPage/DetailScreen';
import RegisterPersonScreen from '../pages/RegisterPerson/RegisterPersonScreen';

const Stack = createStackNavigator();

interface IStackNavigatorPropTypes {}

const StackNavigator: FC<IStackNavigatorPropTypes> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerTitle: 'People'}} name="ListPage" component={ListScreen} />
      <Stack.Screen options={{headerTitle: 'Details'}} name="DetailPage" component={DetailScreen} />
      <Stack.Screen
        options={{headerTitle: 'Add New Person'}}
        name="NewRegisterPage"
        component={RegisterPersonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
