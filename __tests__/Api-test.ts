import {getList} from '../src/api/Api';

describe('request to api', () => {
  test('must return a data object', async () => {
    const result = await getList();
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
  });
});
