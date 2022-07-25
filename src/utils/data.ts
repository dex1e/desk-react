import { LocalStorageService } from "services";
import { ICard, IColumn, IComment, IUser, LocalStorageVariables } from "types";

export const getDataFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const dataFromLocalStorage = LocalStorageService.getData(key);

  return dataFromLocalStorage ? dataFromLocalStorage : defaultValue;
};

export const setUserToLocalStorage = (user: IUser) => {
  LocalStorageService.setData(LocalStorageVariables.USER, user);
};

export const setColumnsToLocalStorage = (columns: Record<string, IColumn>) => {
  LocalStorageService.setData(LocalStorageVariables.COLUMNS, columns);
};

export const setCardsToLocalStorage = (cards: Record<string, ICard>) => {
  LocalStorageService.setData(LocalStorageVariables.CARDS, cards);
};

export const setCommentsToLocalStorage = (
  comments: Record<string, IComment>
) => {
  LocalStorageService.setData(LocalStorageVariables.COMMENTS, comments);
};
