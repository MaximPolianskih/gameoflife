import React from 'react';
import {
    IOption as IOptions,
    GetOptionsFromServer,
    PutOptionsToServer,
    CancelGetOptionsFromServer,
} from '../../services/ServerMock';
import SpeedRegulator from './speedRegulator/SpeedRegulator';

interface IProp {
    userName: string;
    onChange: (row: number, col: number) => void;
}
interface IState {
    isLoading: boolean;
    userName: string;
    rows: number;
    cols: number;
    percent: number;
    speed: number;
}

class Options extends React.Component<IProp, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: false,
            userName: this.props.userName,
            rows: 0,
            cols: 0,
            percent: 0,
            speed: 0,
        };
    }

    async componentDidMount() {
        await this.LoadOptions();
        this.props.onChange(this.state.rows, this.state.cols);
    }

    async componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.userName !== this.state.userName) {
            await this.LoadOptions();
        }
    }

    componentWillUnmount() {
        CancelGetOptionsFromServer();
    }

    ApplyOptions() {
        PutOptionsToServer(this.state.userName, {
            rows: this.state.rows,
            cols: this.state.cols,
            percent: this.state.percent,
            speed: this.state.speed,
        } as IOptions);
        this.props.onChange(this.state.rows, this.state.cols);
    }

    async LoadOptions() {
        this.setState({ isLoading: true });
        this.setState(
            (await GetOptionsFromServer(this.state.userName)) as IState,
        );
        this.setState({ isLoading: false });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <label data-testid="options-loader-lebel">
                    Настройки пользователя {this.state.userName} загружаются...
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
                    value={this.state.rows}
                    onChange={e => {
                        const num = parseInt(e.target.value, 10);
                        if (!isNaN(num)) {
                            this.setState({ rows: num });
                        }
                    }}
                />
                <br></br>
                <label>Количество столбцов:</label>
                <input
                    data-testid="options-input-cols"
                    type="number"
                    value={this.state.cols}
                    onChange={e => {
                        const num = parseInt(e.target.value, 10);
                        if (!isNaN(num)) {
                            this.setState({ cols: num });
                        }
                    }}
                />
                <br></br>
                <label>Процент заполнености поля:</label>
                <input
                    data-testid="options-input-percent"
                    type="number"
                    value={this.state.percent}
                    onChange={e => {
                        const num = parseInt(e.target.value, 10);
                        if (!isNaN(num)) {
                            this.setState({ percent: num });
                        }
                    }}
                />
                <br></br>
                <label>Скорость анимации:</label>
                <SpeedRegulator
                    clickHandler={(speed: number) => {
                        this.setState({ speed: speed });
                    }}
                />
                <br></br>
                <button
                    data-testid="options-change-button"
                    onClick={() => this.ApplyOptions()}
                >
                    Изменить
                </button>
            </div>
        );
    }
}

export default Options;
