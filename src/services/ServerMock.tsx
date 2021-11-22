import {SpeedEnum} from "../components/options/speedRegulator/SpeedRegulator";

export interface IOption {
    rows: number;
    cols: number;
    percent: number;
    speed: number;
}

let timeout: ReturnType<typeof setTimeout>;

export async function GetOptionsFromServer(userName: string) {
    await new Promise((f) => timeout = setTimeout(f, 500));
    const options = localStorage.getItem(userName);
    return (
        options
            ? JSON.parse(options)
            : {rows: 50, cols: 150, percent: 50, speed: SpeedEnum.Fast}
    ) as IOption;
}

export function CancelGetOptionsFromServer() {
    clearTimeout(timeout);
}

export function PutOptionsToServer(userName: string, options: IOption): void {
    localStorage.setItem(userName, JSON.stringify(options));
}

