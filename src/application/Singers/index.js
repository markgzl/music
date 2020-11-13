import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HorizenScroll from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes, areatypes } from '../../api/config'
import { CatScrollWrap, SingerListWrap, SingerBox } from './style'
import Scroll from '../../baseUI/scroll'
import Loading from '../../baseUI/loading'
import * as actions from './store/actions'
import LazyLoad, { forceCheck } from 'react-lazyload'



function Singers(){
	const {singerList, page, enterLoading, pullUpLoading, pullDownLoading} = useSelector(state=>({
		singerList: state.getIn(['singer','singerList']),
		page: state.getIn(['singer','page']),
		enterLoading: state.getIn(['singer','enterLoading']),
		pullUpLoading: state.getIn(['singer','pullUpLoading']),
		pullDownLoading: state.getIn(['singer','pullDownLoading']),
	}))
	const [ cat, setCat ] = useState('')
	const [ alpha, setAlpha ] = useState('')
	const [ area, setArea ] = useState('')
	const dispatch = useDispatch()
	// 获取歌手列表
	const getSingerList = (val1, val2, val3) => {
		dispatch(actions.changePage(0))
		dispatch(actions.changeEnterLoading(true))
		dispatch(actions.dispatchSingerList({cat: val1, alpha: val2, area: val3}))
	}
	// 获取热门歌手列表
	const getHotSingerList = () => {

		dispatch(actions.dispatchHotSinger())
	}
	useEffect(()=>{
		if(!singerList.size){
			
			dispatch(actions.changePage(0))
			dispatch(actions.dispatchHotSinger())
		}
	},[])

	const handleCatClick = (val) => {
		getSingerList(val, alpha, area)
		setCat(val)
	}
	const handleAlphaClick = (val) => {
		getSingerList(cat, val,area)
		setAlpha(val)
	}
	const handleAreaClick = (val) => {
		getSingerList(cat, alpha, val)
		setArea(val)
	}

	const singerListJS = singerList.size ? singerList.toJS() : []

	const onScrollPullUp = () => {
		dispatch(actions.changePage(page+1))
		dispatch(actions.changePullUpLoading(true))
		if(!cat && !alpha && !area){
			getHotSingerList()
		}else{
			getSingerList(cat,alpha, area)
		}
	}
	const onScrollPullDown = () => {
		dispatch(actions.changePage(0))
		dispatch(actions.changePullDownLoading(true))
		if(!cat && !alpha && !area){
			getHotSingerList()
		}else{
			getSingerList(cat,alpha, area)
		}
	}

	function renderSingerList(){
		return ( <div>
			{singerListJS.map(singer=>(
				<SingerBox key={singer.name}>
					<div className='img-wrap'>
						<LazyLoad placeholder={<img src={require('./singer.png')} width='100%' height='100%' alt={singer.name} />}>
							<img src={singer.picUrl+'?param=150x150'} width='100%' height='100%' alt={singer.name} />
						</LazyLoad>
					</div>
					<div className='name'>{singer.name}</div>
				</SingerBox>
			)) 	}
		</div> )
	}

	return (
		<div>
			<CatScrollWrap>
				<HorizenScroll curVal={cat} list={categoryTypes} title={'默认分类:'} onItemClick={handleCatClick}  />
				<HorizenScroll curVal={area} list={areatypes} title={'地区:'} onItemClick={handleAreaClick} />
				<HorizenScroll curVal={alpha} list={alphaTypes} title={'歌手首字母:'} onItemClick={handleAlphaClick} />
			</CatScrollWrap>
			{enterLoading && <Loading /> }
			<SingerListWrap>
				<Scroll 
					pullUp={onScrollPullUp}
					pullDown={onScrollPullDown}
					pullUpLoading={pullUpLoading}
					pullDownLoading={pullDownLoading}
					onScroll={forceCheck}
				>
					{renderSingerList()}					
				</Scroll>
			</SingerListWrap>

		</div>
	
	)
}


export default Singers