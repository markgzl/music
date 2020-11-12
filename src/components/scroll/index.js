import React, {forwardRef, useState, useEffect, useRef, useImperativeHandle  } from 'react'
import BScroll from 'better-scroll'
import ProtoTypes from 'prop-types'
import styled from 'styled-components'

const ScrollContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`
// forwardRef 实现 ref 的透传， 可实现父组件操作子组件内的 ref
const Scroll = forwardRef((props, ref) => {
	const [bScroll, setBScroll] = useState(null)
	const scorollContainerRef = useRef()
	const { direction, click, refresh, bounceDown, bounceTop, onScroll, pullDown, pullUp } = props

	// scroll 初始化
	useEffect(()=>{
		const scroll = new BScroll(scorollContainerRef.current, {
			scrollX: direction === 'horizental',
			scrollY: direction === 'vertical',
			probeType: 3,
			click,
			bounce: {
				top: bounceTop,
				bottom: bounceDown
			},
			mouseWheel: true,
		
		})
		setBScroll(scroll)
		return ()=>{
			setBScroll(null)
		}
	},[])

	useEffect(() => {
		if(!bScroll || !onScroll) return;
		bScroll.on('scroll', (scroll) => {
			onScroll(scroll);
		})
		return () => {
			bScroll.off('scroll');
		}
	}, [onScroll, bScroll]);

	// scrcoll 绑定事件
	useEffect(()=>{
		if(!bScroll || !pullUp) return 
		bScroll.on('scrollEnd',()=>{
			console.log(bScroll,'-----')
			 // 判断是否滑动到了底部
			if(bScroll.y <= bScroll.maxScrollY + 100){
				pullUp()
			}
		})
		return () => {
			bScroll.off('scrollEnd')
		}

	},[pullUp, onScroll])
	// scrcoll 绑定事件
	useEffect(()=>{
		if(!bScroll || !pullDown) return 
		bScroll.on('scrollEnd',(position)=>{
			// 判断用户下拉
			if(position.y > 50){
				pullDown()
			}
		})
		return () => {
			bScroll.off('scrollEnd')
		}
	},[pullDown, onScroll])

	// 刷新
	useEffect(()=>{
		console.log(9999,bScroll,refresh)
		if(bScroll && refresh){
			bScroll.refresh()
		}
	})

	useImperativeHandle(ref,
		() => ({
			refresh(){
				if(bScroll){
					bScroll.refresh()
					bScroll.scrollTo(0,0)
				}
			},
			getBScroll(){
				if(bScroll){
					return bScroll
				}
			}
		})
	)

	return (
		<ScrollContainer ref={scorollContainerRef}>
			{props.children}
		</ScrollContainer>
	)
})

Scroll.protoTypes = {
	direction: ProtoTypes.oneOf(['vertical','horizental']),
	click: true,
	refresh: ProtoTypes.bool,
	onScroll: ProtoTypes.func,
	pullUp: ProtoTypes.func,
	pullDown: ProtoTypes.func,
	pullDownLoading: ProtoTypes.bool,
	pullUpLoading: ProtoTypes.bool,
	bounceTop: ProtoTypes.bool,
	bounceDown: ProtoTypes.bool
}

Scroll.defaultProps = {
	direction: 'vertical',
	click: true,
	refresh: true,
	onScroll: null,
	pullUp: null,
	pullDown: null,
	pullDownLoading: false,
	pullUpLoading: false,
	bounceDown: true,
	bounceTop: true
}
export default Scroll