import React, { useEffect } from 'react'
import Slider from '../../components/swiper'
import RecommendList from '../../components/list'
import Scroll from '../../components/scroll'
import styled from 'styled-components'
import { connect, useDispatch, useSelector } from 'react-redux'
import * as actions from './store/action'

const ContentWrap = styled.div`
	position: fixed;
	top: 94px;
	bottom: 0;
	width: 100%;
	p{
		line-height: 3;
	}
`

function Recommend(){

	const {bannerList, recommendList} = useSelector(state=>({
		bannerList: state.getIn(['recommend', 'bannerList']),
		recommendList: state.getIn(['recommend', 'recommendList'])
	}))

	const dispatch = useDispatch()
	useEffect(()=>{
		!bannerList.size && dispatch(actions.getBannerList())
		!recommendList.size && dispatch(actions.getRecommend())
	},[])

	const bannerListJS = bannerList ? bannerList.toJS() : [];
	const recommendListJS = recommendList ? recommendList.toJS() : [];
	return (
		<ContentWrap>
			<Scroll>
				<div>
					<Slider bannerList={bannerListJS} />
					<RecommendList recommendList={recommendListJS} />
				</div>
			</Scroll>
			
		</ContentWrap>
	)
}
// 映射 Redux 全局的 state 到组件的 props 上
// const mapStateToProps = (state) => ({ 
// 	// 不要在这里将数据 toJS
//   // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
// 	bannerList: state.getIn(['recommend', 'bannerList']),
// 	recommendList: state.getIn(['recommend', 'recommendList'])
// })

// // 映射 dispatch 到 props 上
// const mapDispathToProps =(dispatch)=>({
// 	getBannerDispatch(){
// 		dispatch(actions.getBannerList())
// 	},
// 	getRecommendListDispatch(){
// 		dispatch(actions.getRecommend())
// 	}
// })
// export default connect(mapStateToProps)(React.memo(Recommend))
export default React.memo(Recommend)