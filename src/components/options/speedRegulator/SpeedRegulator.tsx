import cn from 'classnames';
import React, { useState } from 'react';

interface ISpeedRegulator {
    clickHandler: (speed: number) => void;
}

function SpeedRegulator({ clickHandler }: ISpeedRegulator) {
    return (
        <div className={cn(SpeedRegulator.name)}>
            <button onClick={() => clickHandler(2)} data-testid={"speed-regulator-button-low"}>Низкая</button>
            <button onClick={() => clickHandler(4)} data-testid={"speed-regulator-button-medium"}>Средняя</button>
            <button onClick={() => clickHandler(8)} data-testid={"speed-regulator-button-hight"}>Высокая</button>
        </div>
    );
}

export default SpeedRegulator;
