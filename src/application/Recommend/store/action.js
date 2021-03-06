import * as actionTypes from './constant'
import { fromJS } from 'immutable'
import { getBanner, getRecommendList } from '../../../api/request'

const changeBanner = (data) => ({
	type: actionTypes.CHANGE_BANNER,
	data: fromJS(data)
})
const changeRecommendList =(data)=>({
	type: actionTypes.CHANGE_RECOMMEND_LIST,
	data: fromJS(data)
})

const changeEnterLoading = (data) => ({
	type: actionTypes.CHANGE_RECOMMEND_LOADING,
	data
})

export const getBannerList = () => {
	return (dispatch) => {
		getBanner().then(res=>{
			dispatch(changeBanner(res.banners))
		}).catch(()=>{
			console.error('获取轮播图异常')
		})
	}
}

export const getRecommend = () => {
	return dispatch => {
		getRecommendList().then(res=>{
			dispatch(changeRecommendList(res.result))
			dispatch (changeEnterLoading(false));
		}).catch(()=>{
			console.error('推荐歌单数据传输错误')
			dispatch (changeEnterLoading(false));
		})
	}
}