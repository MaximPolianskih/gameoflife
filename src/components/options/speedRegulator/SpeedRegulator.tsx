import React from 'react';
import cn from 'classnames';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {IOptionState} from '../OptionsReducer';
import './speed-regulator.css'

export enum SpeedEnum {
    Slow = 2,
    Medium = 16,
    Fast = 128,
}

export function GetSpeedName(speed: SpeedEnum) {
    switch (speed) {
        case SpeedEnum.Fast:
            return 'Быстрая';
        case SpeedEnum.Medium:
            return 'Средняя';
        case SpeedEnum.Slow:
            return 'Медленная';
    }
}

interface ISpeedRegulator {
    clickHandler: (speed: number) => void;
}

function SpeedRegulator({clickHandler}: ISpeedRegulator) {
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;

    return (
        <div className="SpeedRegulator"
             data-testid={'speed-regulator-component'}>
            <label data-testid={'speed-regulator-label'}>Скорость анимации: {GetSpeedName(optionState.speed)}</label>
            <br/>
            <button
                className={"SpeedRegulatorButton"}
                onClick={() => clickHandler(SpeedEnum.Slow)}
                data-testid={'speed-regulator-button-low'}
            >
                {GetSpeedName(SpeedEnum.Slow)}
            </button>
            <button
                className={"SpeedRegulatorButton"}
                onClick={() => clickHandler(SpeedEnum.Medium)}
                data-testid={'speed-regulator-button-medium'}
            >
                {GetSpeedName(SpeedEnum.Medium)}
            </button>
            <button
                className={"SpeedRegulatorButton"}
                onClick={() => clickHandler(SpeedEnum.Fast)}
                data-testid={'speed-regulator-button-high'}
            >
                {GetSpeedName(SpeedEnum.Fast)}
            </button>
        </div>
    );
}

export default SpeedRegulator;
