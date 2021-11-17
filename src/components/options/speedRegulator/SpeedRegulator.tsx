import cn from 'classnames';
import React, { useState } from 'react';
import { SpeedEnum } from './SpeedRegulatorReducer';

interface ISpeedRegulator {
    clickHandler: (speed: number) => void;
}

function SpeedRegulator({ clickHandler }: ISpeedRegulator) {
    return (
        <div className={cn(SpeedRegulator.name)}>
            <label>
                Скорость анимации: {'Низкая' /*TODO использовать stase*/}
            </label>
            <br></br>
            <button
                onClick={() => clickHandler(SpeedEnum.Slow)}
                data-testid={'speed-regulator-button-low'}
            >
                Низкая
            </button>
            <button
                onClick={() => clickHandler(SpeedEnum.Medium)}
                data-testid={'speed-regulator-button-medium'}
            >
                Средняя
            </button>
            <button
                onClick={() => clickHandler(SpeedEnum.Fast)}
                data-testid={'speed-regulator-button-hight'}
            >
                Высокая
            </button>
        </div>
    );
}

export default SpeedRegulator;
