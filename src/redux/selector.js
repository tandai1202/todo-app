import { createSelector } from "@reduxjs/toolkit";

export const getTodos = (state) => state.todos;

export const getFilters = (state) => state.filter.filters;

export const getFilter = (state) => state.filter.filter;

export const todosSelector = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    return todos.filter((todo) => {
      if (filter === "all") {
        return true;
      }
      return filter === "completed" ? todo.completed : !todo.completed;
    });
  }
);
