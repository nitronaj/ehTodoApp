import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

let nextTodoId = 0;

const getVisibilityTodo = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL': {
      return todos;
    }
    case 'SHOW_ACTIVE': {
      return todos.filter(todo => todo.completed === false)
    }
    case 'SHOW_COMPLETED': {
      return todos.filter(todo => todo.completed === true);
    }
    default:
      return todos;
  }
}
const Todos = ({
    store,
    todos,
    visibilityFilter
  }) => {

  function addTodo(text) {
    store.dispatch({
      type: 'ADD_TODO',
      text,
      id: todos.length
    });
  }


  function toggleTodo(id) {
    store.dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  function onFilterClick(filter) {
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }



  return (
    <div>
      <AddTodo onAddClick={addTodo} />
      <TodoList
        todos={
          getVisibilityTodo(
            todos,
            visibilityFilter
          )
        }
        onTodoClick={toggleTodo}
      />

      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={onFilterClick} />
    </div>
  );
}

export default Todos;