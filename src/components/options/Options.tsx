import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameOfLife } from '../../logics/BaseLogic';
import { getOptionsFromServer } from '../../actions/Actions';
import { RootState } from '../../store/store';
import { generateField } from '../grid/GridReducer';
import { ILoginState } from '../login/LoginReducer';
import {
    IOptionState,
    changeOptions,
    applyOptions,
    OptionsLoadingEnum,
} from './OptionsReducer';
import SpeedRegulator from './speedRegulator/SpeedRegulator';

export const Options: React.FC = props => {
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    const loginState = useSelector<RootState>(
        state => state.login,
    ) as ILoginState;
    const dispatch = useDispatch();
    const logic = new GameOfLife();

    useEffect(() => {
        if (optionState.status !== OptionsLoadingEnum.Complete) {
            dispatch(getOptionsFromServer(loginState.userName));
        }
    });

    if (optionState.status == OptionsLoadingEnum.Loading) {
        return (
            <label data-testid="options-loader-lebel">
                Настройки пользователя {loginState.userName} загружаются...
            </label>
        );
    }

    if (optionState.status == OptionsLoadingEnum.Error) {
        return (
            <label data-testid="options-loader-lebel">
                Ошибка при загрузке настроек пользователя {loginState.userName}.
            </label>
        );
    }

    return (
        <div>
            <br></br>
            <label>Количество строк:</label>
            <input
                data-testid="options-input-rows"
                type="number"
                value={optionState.rows}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                        dispatch(changeOptions({ rows: num }));
                        dispatch(generateField({ ...optionState, rows: num }));
                    }
                }}
            />
            <br></br>
            <label>Количество столбцов:</label>
            <input
                data-testid="options-input-cols"
                type="number"
                value={optionState.cols}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                      dispatch(changeOptions({ cols: num }));
                      dispatch(generateField({ ...optionState, cols: num }));
                    }
                }}
            />
            <br></br>
            <label>Процент заполнености поля:</label>
            <input
                data-testid="options-input-percent"
                type="number"
                value={optionState.percent}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                        dispatch(changeOptions({ percent: num }));
                        dispatch(
                            generateField({ ...optionState, percent: num }),
                        );
                    }
                }}
            />
            <br></br>
            <SpeedRegulator
                clickHandler={(speed: number) => {
                    dispatch(changeOptions({ speed: speed }));
                }}
            />
            <br></br>
            <button
                data-testid="options-change-button"
                onClick={() => dispatch(applyOptions(loginState.userName))}
            >
                Сохранить
            </button>
        </div>
    );
};
