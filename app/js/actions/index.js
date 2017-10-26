let nextIndexId = 0;
import * as types from '../constants/ActionTypes'

export const addElasticsearchIndex = (indexName) => {
  return {
    type: types.ADD_ELASTICSEARCH_INDEX,
    id: nextIndexId++,
    indexName
  };
};

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
};
