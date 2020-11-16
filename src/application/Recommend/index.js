import React, { useEffect } from 'react'
import Slider from '../../components/swiper'
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll'
import Loading from '../../baseUI/loading'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './store/action'
import { forceCheck } from 'react-lazyload';
import { renderRoutes } from 'react-router-config';


const ContentWrap = styled.div`
	position: fixed;
	top: 94px;
	bottom: 0;
	width: 100%;
	p{
		line-height: 3;
	}
`

function Recommend(props){

	const {bannerList, recommendList, enterLoading} = useSelector(state=>({
		bannerList: state.getIn(['recommend', 'bannerList']),
		recommendList: state.getIn(['recommend', 'recommendList']),
		enterLoading: state.getIn(['recommend', 'enterLoading'])
	}))

	const dispatch = useDispatch()
	useEffect(()=>{
		!bannerList.size && dispatch(actions.getBannerList())
		!recommendList.size && dispatch(actions.getRecommend())
	},[])

	const bannerListJS = bannerList ? bannerList.toJS() : [];
	const recommendListJS = recommendList ? recommendList.toJS() : [];
	console.log(props,'----')
	return (
		<div>
			<ContentWrap>
				<Scroll onScroll={forceCheck}>
					<div>
						<Slider bannerList={bannerListJS} />
						<RecommendList recommendList={recommendListJS} />
						{ enterLoading && <Loading />}
					</div>
				</Scroll>
			</ContentWrap>
			{renderRoutes(props.route.routes)}
		</div>
		
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