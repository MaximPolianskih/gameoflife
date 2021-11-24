import { cleanup } from '@testing-library/react';
import { GetOptionsFromServer, IOption, PutOptionsToServer } from './ServerMock';
import { SpeedEnum } from '../components/options/speedRegulator/SpeedRegulator';

afterEach(cleanup);

describe('ServerMock tests', () => {
    const userName = 'Test user name';
    const expectedOptions = { rows: 10, cols: 10, percent: 43, speed: 128 } as IOption;

    test('PutOptionsToServer', () => {
        expect(localStorage.getItem(userName)).toEqual(null);

        PutOptionsToServer(userName, expectedOptions);
        const value = JSON.parse(localStorage.getItem(userName) as string);

        expect(value).toEqual(expectedOptions);
    });

    test('GetOptionsFromServer by expected user name', async () => {
        const option = await GetOptionsFromServer(userName);
        expect(option).toEqual(expectedOptions);
    });

    test('GetOptionsFromServer by unexpected user name', async () => {
        const options = await GetOptionsFromServer('unexpected user name');
        expect(options).toEqual({ rows: 50, cols: 150, percent: 50, speed: SpeedEnum.Fast });
    });
});
