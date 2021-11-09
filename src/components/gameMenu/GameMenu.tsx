import cn from 'classnames';
import React, { useState } from 'react';


function GameMenu() {
    return (
        <div className={cn(GameMenu.name)}>
            <button data-testid={"game-menu-button-start"}>Запустить</button>
            <button data-testid={"game-menu-button-pause"}>Пауза</button>
            <button data-testid={"game-menu-button-reset"}>Сбросить</button>
        </div>
    );
}

export default GameMenu;
