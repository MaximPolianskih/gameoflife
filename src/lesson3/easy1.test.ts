import { getUserOrderStates } from './easy1';

test('easy1 function', () => {
  let result = getUserOrderStates([
    'initial',
    'inWork',
    'buyingSupplies',
    'producing',
    'fullfilled',
  ]);
  expect(result).toStrictEqual(['initial', 'inWork', 'fullfilled']);
});
