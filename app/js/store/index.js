import { createStore, combineReducers } from 'redux';

const elasticsearchIndex = (state, action) => {
  switch (action.type) {
    case 'ADD_ELASTICSEARCH_INDEX':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_ELASTICSEARCH_INDEX':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const elasticsearchIndices = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ELASTICSEARCH_INDEX':
      return [
        ...state,
        elasticsearchIndex(undefined, action)
      ];
    case 'TOGGLE_ELASTICSEARCH_INDEX':
      return state.map(esi =>
        elasticsearchIndex(esi, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const elasticsearchIndexManagerApp = combineReducers({
  elasticsearchIndices,
  visibilityFilter
});

export default createStore(elasticsearchIndexManagerApp)