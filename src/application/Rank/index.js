import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, List, ListItem, SongList } from './style'
import Scroll from '../../baseUI/scroll'


function Rank(){
	const dispatch = useDispatch()
	const {rankList, loading} = useSelector(state=>({
		rankList: state.getIn(['rank','rankList']),
		loading: state.getIn(['rank','loading'])
	}))

	return (
		<Container>
			<Scroll>
				<div>
					<h2>官方榜</h2>
					<h2>全球榜</h2>
				</div>
			</Scroll>
		</Container>
	)
}


export default Rank