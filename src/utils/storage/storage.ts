import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    const jsonData = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonData);
  } catch (err) {
    throw new Error('Hata');
  }
};

export const retrieveData = async (key: string) => {
  try {
    const result: any = await AsyncStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    }
    return undefined;
  } catch (err) {
    throw new Error('Hata');
  }
};

export const LIST_DATA = '@list_data';
