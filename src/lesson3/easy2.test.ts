import { getOrderState } from './easy2';

test('easy2 function', () => {
  let result = getOrderState({
      state: 'fullfilled',
      sum: 123,
      workerId: 123,
      suppliesSum: 123,
      produceEstimate: new Date(),
      fullfillmentDate: new Date()
    });
  expect(result).toStrictEqual('fullfilled');
});
