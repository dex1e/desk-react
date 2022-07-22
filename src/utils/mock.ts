import { ICard, IColumns, IComment } from "types";

export const defaultUsername = {
  username: "",
};

export const defalutColumns: Record<string, IColumns> = {
  a1: {
    id: "a1",
    title: "To Do",
  },
  a2: {
    id: "a2",
    title: "In Progress",
  },
  a3: {
    id: "a3",
    title: "Doing",
  },
  a4: {
    id: "a4",
    title: "Done",
  },
};

export const defaultCards: Record<string, ICard> = {
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
};

export const defaultComments: Record<string, IComment> = {
  0: {
    cardId: "123",
    id: "0",
    author: "Ivan",
    text: "hello",
  },
  1: {
    cardId: "345",
    id: "1",
    author: "Boris",
    text: "Swift",
  },
  2: {
    cardId: "567",
    id: "2",
    author: "Evgeny",
    text: "I`m frontend developer",
  },
  3: {
    cardId: "789",
    id: "3",
    author: "Ivan",
    text: "Kotlin",
  },
  4: {
    cardId: "789",
    id: "4",
    author: "Egor",
    text: "Pascal",
  },
  5: {
    cardId: "912",
    id: "5",
    author: "Julia",
    text: "I`m backend developer",
  },
  6: {
    cardId: "912",
    id: "6",
    author: "Danil",
    text: "C++",
  },
  7: {
    cardId: "914",
    id: "7",
    author: "Anton",
    text: "Python",
  },
  8: {
    cardId: "914",
    id: "8",
    author: "Masha",
    text: "Java",
  },
  9: {
    cardId: "456",
    id: "9",
    author: "James",
    text: "JS",
  },
  10: {
    cardId: "678",
    id: "10",
    author: "Johny",
    text: "C#",
  },
};
