import React, {FC, useState} from 'react';

import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation, RouteProp} from '@react-navigation/native';

import {DataType} from '../../api/ApiTypes';

import {AppParams} from '../../navigator/NavigatorType';

import {LIST_DATA, retrieveData, storeData} from '../../utils/storage/storage';

import RegisterPersonView from './RegisterPersonView';
import {RegisterPersonValidation} from './RegisterPersonValidate';

export interface IRegisterPersonScreenProps {
  route: RouteProp<AppParams, 'NewRegisterPage'>;
}

const RegisterPersonScreen: FC<IRegisterPersonScreenProps> = ({route}) => {
  const navigation: StackNavigationProp<AppParams> = useNavigation();
  const {setData} = route.params;

  const [personData, setPersonData] = useState<DataType>({
    id: '',
    name: '',
    job: '',
    description: '',
    avatar: '',
  });

  const onChangePersonData = (key: string, value: string) => {
    const tempPersonData = {...personData, [key]: value};
    setPersonData({...tempPersonData});
  };

  const onPressAddPerson = async () => {
    const {error} = RegisterPersonValidation.checkFields(personData);

    if (!error) {
      const listData: Array<DataType> = await retrieveData(LIST_DATA);
      personData.id = createId();

      if (personData.avatar === '') {
        personData.avatar = 'http://placeimg.com/640/480/food';
      }

      const tempListData = [...listData, {...personData}];
      setData(tempListData);

      await storeData(LIST_DATA, tempListData).finally(() => navigation.goBack());
    }
  };

  const createId = () => {
    return Math.random().toString(16).substring(2, 9);
  };

  return (
    <RegisterPersonView
      onChangePersonData={onChangePersonData}
      onPressAddPerson={onPressAddPerson}
    />
  );
};

export default RegisterPersonScreen;
