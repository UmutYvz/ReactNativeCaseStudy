import AsyncStorage from '@react-native-async-storage/async-storage';

import {storeData, retrieveData, LIST_DATA} from '../src/utils/storage/storage';
import {dummyData} from '../src/utils/DummyDataForTest';

beforeEach(async () => {
  await AsyncStorage.clear();
});

describe('getDataFromStorage', () => {
  test('if no result exist at key, return undefined', async () => {
    const result = await retrieveData(LIST_DATA);
    expect(result).toEqual(undefined);
  });

  test('if data exist at key, return data with array of DataType', async () => {
    await storeData(LIST_DATA, dummyData);
    const result = await retrieveData(LIST_DATA);
    expect(result).toEqual(dummyData);
  });
});
