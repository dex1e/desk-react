import { ICard, IColumns } from "types";

const data = {
  username: "",
  columns: {
    0: {
      id: 0,
      title: "To Do",
      cards: ["0", "1"],
    },
    1: {
      id: 1,
      title: "In Progress",
      cards: ["2", "3"],
    },
    2: {
      id: 2,
      title: "Done",
      cards: ["4", "5"],
    },
    3: {
      id: 3,
      title: "Doing",
      cards: ["6", "7"],
    },
  },
  cards: {
    0: {
      columnId: "0",
      id: 0,
      title: "TitleTODO",
      description: "",
      comment: ["0", "1", "2"],
    },
    1: {
      columnId: "1",
      id: 1,
      title: "Title2",
      description: "Detailed description",
      comment: ["3", "4", "5"],
    },
    2: {
      columnId: "2",
      id: 2,
      title: "Title inProgress",
      description: "",
      comment: ["6", "7", "8"],
    },
    3: {
      columnId: "3",
      id: 3,
      title: "Title2",
      description: "Detailed description",
      comment: ["9", "10", "11"],
    },
    4: {
      columnId: "4",
      id: 4,
      title: "TitleDone",
      description: "",
      comment: ["12", "13", "14"],
    },
    5: {
      columnId: "5",
      id: 5,
      title: "Title2",
      description: "Detailed description",
      comment: ["15", "16", "17"],
    },
    6: {
      columnId: "6",
      id: 6,
      title: "TitleDoing",
      description: "",
      comment: ["18", "19", "20"],
    },
    7: {
      columnId: "7",
      id: 7,
      title: "Title2",
      description: "Detailed description",
      comment: ["21", "22", "23"],
    },
  },
  comment: {
    0: {
      cardId: "0",
      id: 0,
      author: "Ivan",
      text: "hello",
    },
    1: {
      cardId: "1",
      id: 1,
      author: "Boris",
      text: "hi",
    },
    2: {
      cardId: "2",
      id: 2,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
    3: {
      cardId: "3",
      id: 3,
      author: "Ivan",
      text: "hello",
    },
    4: {
      cardId: "4",
      id: 4,
      author: "Boris",
      text: "hi",
    },
    5: {
      cardId: "5",
      id: 5,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
    6: {
      cardId: "6",
      id: 6,
      author: "Danil",
      text: "FR",
    },
    7: {
      cardId: "7",
      id: 7,
      author: "Anton",
      text: "BB",
    },
    8: {
      cardId: "8",
      id: 8,
      author: "Masha",
      text: "Java",
    },
    9: {
      cardId: "9",
      id: 9,
      author: "Ivan",
      text: "hello",
    },
    10: {
      cardId: "10",
      id: 10,
      author: "Boris",
      text: "hi",
    },
    11: {
      cardId: "11",
      id: 11,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
    12: {
      cardId: "12",
      id: 12,
      author: "Kirill",
      text: "AWP",
    },
    13: {
      cardId: "13",
      id: 13,
      author: "Kolya",
      text: "M4A1",
    },
    14: {
      cardId: "14",
      id: 14,
      author: "Olya",
      text: "Test",
    },
    15: {
      cardId: "15",
      id: 15,
      author: "Ivan",
      text: "hello",
    },
    16: {
      cardId: "16",
      id: 16,
      author: "Boris",
      text: "hi",
    },
    17: {
      cardId: "17",
      id: 17,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
    18: {
      cardId: "18",
      id: 18,
      author: "Kostya",
      text: "Sea",
    },
    19: {
      cardId: "19",
      id: 19,
      author: "Boris",
      text: "hi",
    },
    20: {
      cardId: "20",
      id: 20,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
    21: {
      cardId: "21",
      id: 21,
      author: "Ivan",
      text: "hello",
    },
    22: {
      cardId: "22",
      id: 22,
      author: "Boris",
      text: "hi",
    },
    23: {
      cardId: "23",
      id: 23,
      author: "Evgeny",
      text: "I`m frontend developer",
    },
  },
};

export const name = {
  username: "Ivan",
};

export const columns: Record<string, IColumns> = {
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

export const cards: Record<string, ICard> = {
  0: {
    columnId: "a1",
    id: "123",
    title: "TitleTODO",
    description: "",
  },
  1: {
    columnId: "a1",
    id: "345",
    title: "Title2",
    description: "Detailed description",
  },
  2: {
    columnId: "a2",
    id: "567",
    title: "Title inProgress",
    description: "",
  },
  3: {
    columnId: "a2",
    id: "789",
    title: "Title2",
    description: "Detailed description",
  },
  4: {
    columnId: "a3",
    id: "912",
    title: "TitleDoing",
    description: "",
  },
  5: {
    columnId: "a3",
    id: "234",
    title: "Title2",
    description: "Detailed description",
  },
  6: {
    columnId: "a4",
    id: "456",
    title: "TitleDone",
    description: "",
  },
  7: {
    columnId: "a4",
    id: "678",
    title: "Title2",
    description: "Detailed description",
  },
};

export const comments = {
  0: {
    cardId: "0",
    id: 0,
    author: "Ivan",
    text: "hello",
  },
  1: {
    cardId: "0",
    id: 1,
    author: "Boris",
    text: "hi",
  },
  2: {
    cardId: "1",
    id: 2,
    author: "Evgeny",
    text: "I`m frontend developer",
  },
  3: {
    cardId: "1",
    id: 3,
    author: "Ivan",
    text: "hello",
  },
  4: {
    cardId: "2",
    id: 4,
    author: "Boris",
    text: "hi",
  },
  5: {
    cardId: "2",
    id: 5,
    author: "Evgeny",
    text: "I`m frontend developer",
  },
  6: {
    cardId: "3",
    id: 6,
    author: "Danil",
    text: "FR",
  },
  7: {
    cardId: "3",
    id: 7,
    author: "Anton",
    text: "BB",
  },
  8: {
    cardId: "4",
    id: 8,
    author: "Masha",
    text: "Java",
  },
  9: {
    cardId: "4",
    id: 9,
    author: "Ivan",
    text: "hello",
  },
  10: {
    cardId: "5",
    id: 10,
    author: "Boris",
    text: "hi",
  },
};

export default data;
