import { ICardInitialState } from "./types";

export const initialState: ICardInitialState = {
  cards: {
    123: {
      columnId: "a1",
      id: "123",
      title: "TitleToDo",
      description: "Have a good day!",
    },
    345: {
      columnId: "a1",
      id: "345",
      title: "Title2",
      description: "Cheese!",
    },
    567: {
      columnId: "a2",
      id: "567",
      title: "Title inProgress",
      description: "Some description",
    },
    789: {
      columnId: "a2",
      id: "789",
      title: "Title2",
      description: "Detailed description",
    },
    912: {
      columnId: "a3",
      id: "912",
      title: "TitleDoing",
      description: "Batman",
    },
    914: {
      columnId: "a3",
      id: "914",
      title: "Title2",
      description: "Joker",
    },
    456: {
      columnId: "a4",
      id: "456",
      title: "TitleDone",
      description: "None",
    },
    678: {
      columnId: "a4",
      id: "678",
      title: "Title2",
      description: "Spider Man",
    },
  },
};
