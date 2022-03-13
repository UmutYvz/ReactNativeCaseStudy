import React, {FC} from 'react';

import {RouteProp} from '@react-navigation/native';

import {AppParams} from '../../navigator/NavigatorType';
import DetailView from './DetailView';

export interface IDetailScreenProps {
  route: RouteProp<AppParams, 'DetailPage'>;
}

const DetailScreen: FC<IDetailScreenProps> = ({route}) => {
  const {item} = route.params;
  return <DetailView item={item} />;
};

export default DetailScreen;
