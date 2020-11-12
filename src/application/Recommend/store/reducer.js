import * as actionTypes from './constant'
import { fromJS } from 'immutable'

const initState = fromJS({
	bannerList: [],
	recommendList: [],
	enterLoading: true
})

export default (state=initState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_BANNER:
			return state.set('bannerList', action.data)
		case actionTypes.CHANGE_RECOMMEND_LIST: 
			return state.set('recommendList', action.data)
		case actionTypes.CHANGE_RECOMMEND_LOADING:
			return state.set('enterLoading', action.data)
		default:
			return state
	}
}