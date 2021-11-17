import { createAsyncThunk } from "@reduxjs/toolkit";
import { SpeedEnum } from "../components/options/speedRegulator/SpeedRegulatorReducer";

export interface IOption {
    rows: number;
    cols: number;
    percent: number;
    speed: number;
}

let timeout: ReturnType<typeof setTimeout>;

async function GetOptionsFromServer(userName: string) {
  await new Promise((f) => timeout = setTimeout(f, 1000));
  const options = localStorage.getItem(userName);
  return (
      options
          ? JSON.parse(options)
          : { rows: 10, cols: 10, percent: 0, speed: SpeedEnum.Slow }
  ) as IOption;
}

export function CancelGetOptionsFromServer() {
  clearTimeout(timeout);
}

export function PutOptionsToServer(userName: string, options: IOption): void {
  localStorage.setItem(userName, JSON.stringify(options));
}

export const getOptionsFromServer = createAsyncThunk(
    'options/GetOptionsFromServer',
    async (userName: string) => {
        const response = (await GetOptionsFromServer(userName)) as IOption;
        return response;
    },
);
