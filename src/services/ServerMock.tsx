export interface IOption {
    rows: number;
    cols: number;
    percent: number;
    speed: number;
}

let timeout: any;
export async function GetOptionsFromServer(userName: string) {
  await new Promise((f) => timeout = setTimeout(f, 1000));
  const options = localStorage.getItem(userName);
  return (options ? JSON.parse(options) : { rows: 10, cols: 10 }) as IOption;
}

export function CancelGetOptionsFromServer() {
  clearTimeout(timeout);
}

export function PutOptionsToServer(userName: string, options: IOption): void {
  localStorage.setItem(userName, JSON.stringify(options));
}
