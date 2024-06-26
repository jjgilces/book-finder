import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import {Book, ReadingListState  } from '../types';

const initialState: ReadingListState = {
  books: [],
};

const readingListSlice = createSlice({
  name: 'readingList',
  initialState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<Book>) => {
      const book = action.payload;
      if (!state.books.find(b => b.ISBN === book.ISBN)) {
        state.books.push(book);
      }
    },
    removeFromReadingList: (state, action: PayloadAction<Book>) => {
      state.books = state.books.filter(book => book.ISBN !== action.payload.ISBN);
    },
  },
});

export const { addToReadingList, removeFromReadingList } = readingListSlice.actions;
export default readingListSlice.reducer;