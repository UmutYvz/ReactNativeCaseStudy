import React, {FC, useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import ListView from './ListView';

import {getList} from '../../api/Api';
import {DataType} from '../../api/ApiTypes';

import {LIST_DATA, retrieveData, storeData} from '../../utils/storage/storage';

import {AppParams} from '../../navigator/NavigatorType';

export interface IListScreenProps {}

const ListScreen: FC<IListScreenProps> = () => {
  const navigation: StackNavigationProp<AppParams> = useNavigation();

  const [data, setData] = useState<Array<DataType> | []>([]);

  const setInitialData = async () => {
    const listData: Array<DataType> = await retrieveData(LIST_DATA);

    if (!listData) {
      const result: any = await getList();
      storeData(LIST_DATA, result);
      setData(result);
    } else {
      setData(listData);
    }
  };

  useEffect(() => {
    setInitialData();
  }, []);

  const onPressDeleteItem = async (id: string) => {
    const itemDeletedArray = data.filter(item => item.id !== id);
    await storeData(LIST_DATA, itemDeletedArray);
    setData(itemDeletedArray);
  };

  const onPressAddNew = () => navigation.navigate('NewRegisterPage', {setData});

  const onPressItem = (item: DataType) => navigation.navigate('DetailPage', {item});

  return (
    <ListView
      data={data}
      onPressItem={onPressItem}
      onPressDeleteItem={onPressDeleteItem}
      onPressAddNew={onPressAddNew}
    />
  );
};

export default ListScreen;
