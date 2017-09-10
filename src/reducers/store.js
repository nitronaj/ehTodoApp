import {combineReducers, createStore} from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter';


const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )    
//   };
// }

const store = createStore(todoApp);
export default store;



