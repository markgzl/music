import React, { memo, useEffect, useRef } from 'react'
import Scroll from '../scroll'
import { HorizenItem, HorizenList } from './style'
import ProtoTypes from 'prop-types'

const HorizenScroll = ({title, curVal, list, onItemClick }) => {
	const catRef = useRef(null)
	useEffect(()=>{
		let catDom = catRef.current
		let childEle = catDom.querySelectorAll('span')
		let childWidth = 0
		Array.from(childEle).forEach(ele=>[
			childWidth += ele.offsetWidth
		])
		catDom.style.width = `${childWidth}px`
	},[])


	return (
		<Scroll direction={'horizental'}>
			<div ref={catRef}>
				<HorizenList>
				<span className='title'>{title}</span>
				{
					list.map(it=>(
						<HorizenItem key={it.key} className={it.key===curVal?'selected':''} onClick={()=>onItemClick(it.key)}>
							{it.name}
						</HorizenItem>
					))
				}
				
				
			</HorizenList>
			</div>
			
		</Scroll>
	)
}

HorizenScroll.protoTypes = {
	titel: ProtoTypes.string,
	list: ProtoTypes.array,
	onItemClick: ProtoTypes.func,
}
HorizenScroll.defaultProps = {
	titel: '',
	list: [],
	onItemClick: null,
}

export default HorizenScroll