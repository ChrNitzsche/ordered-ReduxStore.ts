import { combineReducers } from "redux";
import RepositoriesReducers from './RepositoriesReducer';

const reducers = combineReducers({
   repositories: RepositoriesReducers
   // ...
});

export default reducers;


// because of TypeScript and type of state
// reducers is a function, and typeof generates the type of the function
// and get it back into a variable, which will be export for using in React/TS
export type RootState = ReturnType<typeof reducers>;     