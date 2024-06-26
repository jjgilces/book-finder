import { combineReducers } from 'redux';
import readingListReducer from '../features/readingListSlice';

const rootReducer = combineReducers({
  readingList: readingListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
