import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorHandler extends Component<Props, State> {
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ hasError: true });
        console.error('Произошла ошибка:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1 data-testid="error-component">Произошла ошибка...</h1>;
        }

        return this.props.children;
    }
}
