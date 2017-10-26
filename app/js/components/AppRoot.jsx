import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import ElasticsearchIndexList from './ElasticsearchIndexList.jsx';
import Footer from './Footer.jsx';
import store from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <ElasticsearchIndexList />
    <Footer />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)