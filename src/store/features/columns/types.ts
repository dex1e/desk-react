import { IColumn } from "types";

export interface IColumnInitialState {
  columns: Record<string, IColumn>;
}

export interface IRenameColumnPayload {
  columnId: string;
  newTitle: string;
}
