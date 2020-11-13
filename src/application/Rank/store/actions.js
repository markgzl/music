import { fromJS } from 'immutable';
import { getRankListRequest } from '../../../api/request';
import * as actionTypes from './constant'

const changeRankList = (data) => ({
  type: actionTypes.CHANGE_RANK_LIST,
  data: fromJS (data)
})
const changeLoading = (data) => ({
  type: actionTypes.CHANGE_LOADING,
  data
})

export const getRankList = () => {
  return dispatch => {
    getRankListRequest().then(data => {
      let list = data && data.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false));
    })
  }
}