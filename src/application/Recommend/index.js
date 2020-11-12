import React, { useRef } from 'react'
import Slider from '../../components/swiper'
import RecommendList from '../../components/list'
import Scroll from '../../components/scroll'
import styled from 'styled-components'
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
	const bannerList = [1,2,3,4,5].map(item=>({key: item, imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'}))
	const recommendList = [1,2,3,4,5,6,7,8,9,10,11,12,123,1452,2698,1524].map(item=>({
		id: item,
		name: '凤凰传奇'+ item,
		count: Math.floor(Math.random() * 100 * item * 3),
		picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg?param=300x300",
	}))

	return (
		<ContentWrap>
			<Scroll>
				<div>
					<Slider bannerList={bannerList} />
					<RecommendList recommendList={recommendList} />
				</div>
			</Scroll>
			
		</ContentWrap>
	)
}


export default Recommend