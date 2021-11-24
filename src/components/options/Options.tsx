import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GameOfLife} from '../../logics/BaseLogic';
import {getOptionsFromServer} from '../../actions/Actions';
import {RootState} from '../../store/store';
import {generateField} from '../grid/GridReducer';
import {ILoginState} from '../login/LoginReducer';
import {applyOptions, changeOptions, IOptionState, OptionsLoadingEnum,} from './OptionsReducer';
import SpeedRegulator from './speedRegulator/SpeedRegulator';
import './options.css'
import cn from "classnames";

export const Options: React.FC = () => {
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
            <div>
                <br></br>
                <label data-testid="options-loader-label">
                    Настройки пользователя {loginState.userName} загружаются...
                </label>
            </div>
        );
    }

    if (optionState.status == OptionsLoadingEnum.Error) {
        return (
            <label data-testid="options-loader-label">
                Ошибка при загрузке настроек пользователя {loginState.userName}.
            </label>
        );
    }

    return (

        <div className="Options">
            <label>Количество строк:</label>
            <input
                data-testid="options-input-rows"
                type="number"
                value={optionState.rows}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                        dispatch(changeOptions({rows: num} as IOptionState));
                        dispatch(generateField({...optionState, rows: num}));
                    }
                }}
            />
            <label>Количество столбцов:</label>
            <input
                data-testid="options-input-cols"
                type="number"
                value={optionState.cols}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                        dispatch(changeOptions({cols: num} as IOptionState));
                        dispatch(generateField({...optionState, cols: num}));
                    }
                }}
            />
            <label>Процент заполнености поля:</label>
            <input
                data-testid="options-input-percent"
                type="number"
                value={optionState.percent}
                onChange={e => {
                    const num = parseInt(e.target.value, 10);
                    if (!isNaN(num)) {
                        dispatch(changeOptions({percent: num} as IOptionState));
                        dispatch(
                            generateField({...optionState, percent: num}),
                        );
                    }
                }}
            />
            <SpeedRegulator
                clickHandler={(speed: number) => {
                    dispatch(changeOptions({speed: speed} as IOptionState));
                }}
            />
            <button
                data-testid="options-change-button"
                onClick={() => dispatch(applyOptions(loginState.userName))}
            >
                Сохранить
            </button>
        </div>
    );
};
