import store from 'store.test';


console.log('initial State');
console.log(store.getState());
console.log('---------------');

console.log('DIspatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current State');
console.log(store.getState());


console.log('DIspatching ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping'
});
console.log('Current State');
console.log(store.getState());

console.log('Dispatching TOGGOLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 1
});
console.log('Current State');
console.log(store.getState());
console.log('---------------');



console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log('Current State');
console.log(store.getState());
console.log('---------------');