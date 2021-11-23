import React from 'react';
import {render} from '@testing-library/react';
import GridItem from './GridItem';
import {store} from "../../../store/store";
import {Provider} from "react-redux";

describe('GridItem', () => {
    test('renders GridItem component', () => {
        const result = render(
            <Provider store={store}>
                <GridItem col={0} row={0} clickHandler={() => {
                }}/>
            </Provider>
        );
        expect(result.container.querySelector('.GridItem')).toBeInTheDocument();
    });
});
