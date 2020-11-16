import { fromJS } from 'immutable';
import * as actionTypes from './constant'
const list = [1,2,3,4,5,6].map(i=>({coverImgId: i, updateFrequency: '榜单'+i, }))

const initState = fromJS ({
  rankList: list,
  loading: true,
  officialList: [],
  globalList: []
})


export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OFFICIAL_LIST:
      return state.set ('officialList', action.data);
    case actionTypes.CHANGE_GLOBAL_LIST:
      return state.set ('globalList', action.data);
    case actionTypes.CHANGE_LOADING:
      return state.set ('loading', action.data);
    default:
      return state;
  }
}

