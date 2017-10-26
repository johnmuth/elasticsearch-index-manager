import React from 'react';
import { connect } from 'react-redux';

import { addElasticsearchIndex } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addElasticsearchIndex(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
export default connect()(AddTodo);