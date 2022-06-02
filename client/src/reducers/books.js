import {
  FETCH_ALL,
  CREATE,
  FILTER_BOOKS,
  ADD_FAV,
  UPDATE_SOLD,
  DELETE_BOOK,
  UPDATE_BOOKS,
} from "../constants/actions";

const intiState = {
  books : [],
  filteredbooks : [],
}



export default (books = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FILTER_BOOKS:
      return action.payload;
    case CREATE:
      return [...books, action.payload];
    case ADD_FAV:
      // return books.map((book) =>
      //   action.payload._id === book._id ? action.payload : book
      // );
      return action.payload;
    case UPDATE_SOLD:
      return books.map((book) =>
        action.payload._id === book._id ? action.payload : book
      );
    case UPDATE_BOOKS:
      return books.map((book) =>
        action.payload._id === book._id ? action.payload : book
      );
    case DELETE_BOOK:
      return books.filter((book) => action.payload !== book._id);
    default:
      return books;
  }
};


/*export default (state = intiState,action) => {
  switch (action.type) {
    case FETCH_ALL:
      state = {
        ...state,
        books : action.payload
      }
    case FILTER_BOOKS:
      state = {
        ...state,
        books : action.payload
      }
    case CREATE:
      state = {
        ...state,
        books : [...books,action.payload]
      }
    case ADD_FAV:
      state = {
        ...state,
        filteredbooks : action.payload
      }

    case UPDATE_SOLD:
      state = {
        ...state,
        books : books.map((book) => action.payload._id === book._id ? action.payload : book)
      }
    case UPDATE_BOOKS:
      state = {
        ...state,
        books : books.map((book) =>action.payload._id === book._id ? action.payload : book )
      }
    case DELETE_BOOK:
      state = {
        ...state,
        books : books.filter((book) => action.payload !== book._id)
      }
    default:
      return state;
  }
};*/