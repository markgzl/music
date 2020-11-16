import { fromJS } from 'immutable';
import { getRankListRequest } from '../../../api/request';
import * as actionTypes from './constant'
import { filterIndex } from '../../../utils/utils'

const changeGlobalList = (data) => ({
  type: actionTypes.CHANGE_GLOBAL_LIST,
  data: fromJS (data)
})
const changeOfficialList = (data) => ({
  type: actionTypes.CHANGE_OFFICIAL_LIST,
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
      const _index = filterIndex(list)
      dispatch(changeOfficialList(list.slice(0, _index)));
      dispatch(changeGlobalList(list.slice(_index)));
      dispatch(changeLoading(false));
    })
  }
}