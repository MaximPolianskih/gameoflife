import { omit } from './easy3';

test('easy3 function', () => {
  let result = omit(
    { key1: 'string', key2: 123, key3: new Date(2021, 12, 21) },
    'key1'
  );
  expect(result).toStrictEqual({
    key2: 123,
    key3: new Date(2021, 12, 21),
  });
});
