import React from "react";
import { ErrorHandler } from "../errorHandler/ErrorHandler";
import Options from "../options/Options";


enum LoginProcessEnum {
  Login,
  Logout
}

interface IState {
  loginStatus: LoginProcessEnum;
  userName: string;
}

class Login extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginStatus: LoginProcessEnum.Logout,
      userName: '',
    };
  }

   Logout() {
    this.setState({ loginStatus: LoginProcessEnum.Logout });
  }

  async Login() {
    this.setState({ loginStatus: LoginProcessEnum.Login });
  }

  render() {
    switch (this.state.loginStatus) {
      case LoginProcessEnum.Login:
        return (
          <div>
            <span data-testid="login-name">Пользователь: {this.state.userName}</span>
            <br></br>
            <ErrorHandler>
              <Options userName={this.state.userName} />
            </ErrorHandler>
            <br></br>
            <button data-testid="logout-button" onClick={() => this.Logout()}>
              Выйти
            </button>
          </div>
        );
      case LoginProcessEnum.Logout:
        return (
          <div>
            <label>Введите имя пользователя:</label>
            <input
              data-testid="login-input"
              type="text"
              value={this.state.userName}
              onChange={(e) => {
                this.setState({ userName: e.target.value });
              }}
            />
            <button data-testid="login-button" onClick={async () => await this.Login()}>
              Войти
            </button>
          </div>
        );
      default:
        throw Error(
          `Не корректное состояние загрузки настроек пользователя: ${this.state.loginStatus}`
        );
    }
  }
}

export default Login;