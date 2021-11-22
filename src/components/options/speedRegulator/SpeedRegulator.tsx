import React from 'react';
import cn from 'classnames';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {IOptionState} from '../OptionsReducer';

export enum SpeedEnum {
    Slow = 2,
    Medium = 16,
    Fast = 128,
}

function GetSpeedName(speed: SpeedEnum) {
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
        <div className={cn(SpeedRegulator.name)}>
            <label>Скорость анимации: {GetSpeedName(optionState.speed)}</label>
            <button
                style={{marginRight: 5, marginTop: 5}}
                onClick={() => clickHandler(SpeedEnum.Slow)}
                data-testid={'speed-regulator-button-low'}
            >
                {GetSpeedName(SpeedEnum.Slow)}
            </button>
            <button
                style={{marginRight: 5}}
                onClick={() => clickHandler(SpeedEnum.Medium)}
                data-testid={'speed-regulator-button-medium'}
            >
                {GetSpeedName(SpeedEnum.Medium)}
            </button>
            <button
                onClick={() => clickHandler(SpeedEnum.Fast)}
                data-testid={'speed-regulator-button-hight'}
            >
                {GetSpeedName(SpeedEnum.Fast)}
            </button>
        </div>
    );
}

export default SpeedRegulator;
