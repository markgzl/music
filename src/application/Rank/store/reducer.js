import { fromJS } from 'immutable';
import * as actionTypes from './constant'

const initState = fromJS ({
  rankList: [],
  loading: true
})


export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      return state.set ('rankList', action.data);
    case actionTypes.CHANGE_LOADING:
      return state.set ('loading', action.data);
    default:
      return state;
  }
}

