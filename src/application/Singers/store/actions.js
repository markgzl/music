import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'
import * as actionTypes from './constant'
import { fromJS } from 'immutable'

const changeSinger = (data) => ({
	type: actionTypes.CHANGE_SINGER_LIST,
	data: fromJS(data)
})
export const changePage = (data) =>({
	type: actionTypes.CHANGE_PAGE_COUNT,
	data
})
const changeAlpha = (data) =>({
	type: actionTypes.CHANGE_ALPHA,
	data
})
const changeArea = (data) =>({
	type: actionTypes.CHANGE_ALPHA,
	data
})
const changeCat = (data) =>({
	type: actionTypes.CHANGE_CATOGORY,
	data
})
export const changeEnterLoading = (data) =>({
	type: actionTypes.CHANGE_ENTER_LOADING,
	data
})
export const changePullUpLoading = (data) =>({
	type: actionTypes.CHANGE_PULLUP_LOADING,
	data
})
export const changePullDownLoading = (data) =>({
	type: actionTypes.CHANGE_PULLDOWN_LOADING,
	data
})

export const dispatchSingerList = ({cat, alpha, area}) => {
	return (dispatch, getState) => {
		const page = getState().getIn(['singer', 'page']);
		const singerList = getState().getIn(['singer', 'singerList']).toJS();
		getSingerListRequest({cat, alpha, page: page*50, area}).then(res=>{
			dispatch(changePullUpLoading(false))
			dispatch(changeEnterLoading(false))
			dispatch(changePullDownLoading(false))
			if(page===0){
				dispatch(changeSinger(res.artists))
			}else{
				dispatch(changeSinger([...singerList,...res.artists]))
			}
		}).catch(() => {
			console.log('歌手数据获取失败');
		});
	}
}

export const dispatchHotSinger = () => {
	return (dispatch, getState) => {
		const page = getState().getIn(['singer', 'page'])
		const singerList = getState().getIn(['singer','singerList']).toJS()
		getHotSingerListRequest(page*50)
		.then(res=>{
			dispatch(changePullUpLoading(false))
			dispatch(changeEnterLoading(false))
			dispatch(changePullDownLoading(false))
			if(page===0){
				dispatch(changeSinger(res.artists))
			}else{
				dispatch(changeSinger([...singerList,...res.artists]))
			}
			
		})
		.catch(err=>{
			console.log('热门歌手数据获取失败');
		})
	}
}