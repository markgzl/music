import { axiosInstance } from './config'

export const getBanner =() => {
	return axiosInstance.get('/banner')
}
export const getRecommendList = () => {
	return axiosInstance.get('/personalized')
}

export const getHotSingerListRequest = (count=1) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= ({cat, alpha, page,area}) => {
  return axiosInstance.get(`/artist/list?type=${cat}&area=${area}&initial=${alpha.toLowerCase()}&offset=${page}`);
}

export const getRankRequest = () => {
	return axiosInstance.get('/toplist/detail')
}