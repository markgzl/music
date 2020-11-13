import { fromJS  } from 'immutable'
import * as actionTypes from './constant'

const initState = fromJS({
	singerList: [],
	cat: '',
	alpha: '',
	page: 0,
	pullUpLoading: false,
	pullDownLoading: false,
	enterLoading: true
})

export default (state=initState, action) => {
	switch(action.type){
		case actionTypes.CHANGE_SINGER_LIST:
			return state.set('singerList', action.data)
		case actionTypes.CHANGE_ALPHA:
			return state.set('alpha', action.data)
		case actionTypes.CHANGE_CATOGORY: 
			return state.set('cat', action.data)
		case actionTypes.CHANGE_ENTER_LOADING:
			return state.set('enterLoading', action.data)
		case actionTypes.CHANGE_PAGE_COUNT:
			return state.set('page', action.data)
		case actionTypes.CHANGE_PULLUP_LOADING:
			return state.set('pullUpLoading', action.data)
		case actionTypes.CHANGE_PULLDOWN_LOADING:
			return state.set('pullDownLoading', action.data)
		default:
				return state
	}
}