import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, List, ListItem, SongList } from './style'
import Scroll from '../../baseUI/scroll'
import * as actions from './store/actions'
import Loading from '../../baseUI/loading'

function Rank(){
	const dispatch = useDispatch()
	const {officialList, globalList, loading} = useSelector(state=>({
		officialList: state.getIn(['rank','officialList']),
		globalList: state.getIn(['rank','globalList']),
		loading: state.getIn(['rank','loading'])
	}))

	useEffect(()=>{
		dispatch(actions.getRankList())
	},[])
	const officialListToJS = officialList.size ? officialList.toJS() : []
	const globalListToJS = globalList.size ? globalList.toJS() : []

	function rederList(list, isRow){
		return <List isRow={isRow}>
			{ list.map(item=>(<ListItem key={item.coverImgId} isRow={isRow}>
				<div className='img-wrap'>
					<img src={item.coverImgUrl} />
					<div className='desc'>{item.updateFrequency}</div>
				</div>
				{!isRow && rederSong(item.tracks)}
			</ListItem>))}
		</List>
	}

	function rederSong(songs){
		return <SongList>
			{songs.map((song,i)=>(
				<li key={song.first}>{i+1}.{song.first}-{song.second}</li>
			))}
		</SongList>
	}
	return (
		<Container>
			{
				loading ? <Loading />: <Scroll>
				<div>
					<h2>官方榜</h2>
					{rederList(officialListToJS, false)}
					<h2>全球榜</h2>
					{rederList(globalListToJS, true)}
				</div>
			</Scroll>
			}
			
		</Container>
	)
}


export default memo(Rank)