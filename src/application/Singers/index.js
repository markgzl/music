import { useEffect, useState } from 'react'
import HorizenScroll from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { CatScrollWrap, SingerListWrap, SingerBox } from './style'
import Scroll from '../../baseUI/scroll'

const singerList = [1, 2,3, 4,5,6,7,8,9,10,11,12].map (item => {
	return {
	  picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
	  name: "隔壁老樊",
	  accountId: 277313426,
	  key: item
	}
  }); 

function renderSingerList(list){
	return (
		<div>
			{
				list.map(singer=>(
					<SingerBox key={singer.key}>
						<div className='img-wrap'>
							<img src={singer.picUrl} width='100%' height='100%' alt={singer.name} />
						</div>
						<div className='name'>{singer.name}</div>
					</SingerBox>
				))
			}
		</div>
	)
}

  
function Singers(){
	const [ cat, setCat ] = useState('')
	const [ alpha, setAlpha ] = useState('')
	useEffect(()=>{

	})
	const handleCatClick = (val) => {
		console.log(val)
		setCat(val)
	}
	const handleAlphaClick = (val) => {
		setAlpha(val)
	}
	return (
		<div>
			<CatScrollWrap>
				<HorizenScroll curVal={cat} list={categoryTypes} title={'分类(默认分类):'} onItemClick={handleCatClick}  />
				<HorizenScroll curVal={alpha} list={alphaTypes} title={'歌手首字母:'} onItemClick={handleAlphaClick} />
			</CatScrollWrap>
			<SingerListWrap>
				<Scroll>
					{renderSingerList(singerList)}					
				</Scroll>
			</SingerListWrap>

		</div>
	
	)
}


export default Singers