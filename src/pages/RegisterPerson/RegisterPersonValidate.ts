import {Alert} from 'react-native';

import {DataType} from '../../api/ApiTypes';

export const RegisterPersonValidation = {
  checkFields: (data: DataType) => {
    if (data.name === '' || data.job === '' || data.description === '') {
      Alert.alert(
        'Some Fields are Empty!',
        data.name === ''
          ? 'Enter name and surname.'
          : data.job === ''
          ? 'Enter job info.'
          : data.description === ''
          ? 'Fill the about field.'
          : 'Fill the empty fields.',
        [{text: 'OK'}],
      );
      return {error: true};
    } else {
      return {error: false};
    }
  },
};
