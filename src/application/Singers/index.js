import { useEffect, useState } from 'react'
import HorizenScroll from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { CatScrollWrap } from './style'
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

		</div>
	
	)
}


export default Singers