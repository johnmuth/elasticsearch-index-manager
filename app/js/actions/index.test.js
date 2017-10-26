import * as actions from './index'
import * as types from '../constants/ActionTypes'

describe('actions', () => {

  it('should create an action to add an elasticsearch index', () => {
    const indexName = 'my-first-index';
    const expectedAction = {
      id: 0,
      type: types.ADD_ELASTICSEARCH_INDEX,
      indexName
    }
    expect(actions.addElasticsearchIndex(indexName)).toEqual(expectedAction)
  })
})