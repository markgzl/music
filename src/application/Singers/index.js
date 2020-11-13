import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HorizenScroll from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes, areatypes } from '../../api/config'
import { CatScrollWrap, SingerListWrap, SingerBox } from './style'
import Scroll from '../../baseUI/scroll'
import Loading from '../../baseUI/loading'
import * as actions from './store/actions'

function renderSingerList(list){
	return ( <div>
		{list.map(singer=>(
			<SingerBox key={singer.name}>
				<div className='img-wrap'>
					<img src={singer.picUrl+'?param=150x150'} width='100%' height='100%' alt={singer.name} />
				</div>
				<div className='name'>{singer.name}</div>
			</SingerBox>
		)) 	}
	</div> )
}

function Singers(){
	const {singerList, page, enterLoading} = useSelector(state=>({
		singerList: state.getIn(['singer','singerList']),
		page: state.getIn(['singer','page']),
		enterLoading: state.getIn(['singer','enterLoading']),
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

	const onPagePullUp = () => {
		dispatch(actions.changePage(page+1))
		if(!cat && !alpha && !area){
			getHotSingerList()
		}else{
			getSingerList(cat,alpha, area)
		}
	}
	useEffect(()=>{
		dispatch(actions.dispatchHotSinger(page))
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
		onPagePullUp()
	}

	return (
		<div>
			<CatScrollWrap>
				<HorizenScroll curVal={cat} list={categoryTypes} title={'默认分类:'} onItemClick={handleCatClick}  />
				<HorizenScroll curVal={area} list={areatypes} title={'地区:'} onItemClick={handleAreaClick} />
				<HorizenScroll curVal={alpha} list={alphaTypes} title={'歌手首字母:'} onItemClick={handleAlphaClick} />
			</CatScrollWrap>
			<SingerListWrap>
				<Scroll pullUp={onScrollPullUp}>
					{renderSingerList(singerListJS)}					
				</Scroll>
			</SingerListWrap>

		</div>
	
	)
}


export default Singers