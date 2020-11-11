import React from 'react'
import Slider from '../../components/swiper'
import RecommendList from '../../components/list'

function Recommend(){
	const bannerList = [1,2,3,4,5].map(item=>({key: item, imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg'}))
	const recommendList = [1,2,3,4,5,6,7,8,9,10].map(item=>({
		id: item,
		name: '凤凰传奇'+ item,
		count: Math.floor(Math.random() * 100 * item * 3),
		picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg?param=300x300",
	}))
	return (
		<div>
			<Slider bannerList={bannerList} />
			<RecommendList recommendList={recommendList} />
		</div>
	)
}


export default Recommend