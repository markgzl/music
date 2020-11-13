import React, {forwardRef, useState, useEffect, useRef, useImperativeHandle, useMemo  } from 'react'
import BScroll from 'better-scroll'
import ProtoTypes from 'prop-types'
import styled from 'styled-components'
import Loading2 from '../loading2'
import { debounce } from '../../utils/utils'

const ScrollContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`
const ScrollBottomLoading = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 101;
	height: 30px;
`
// forwardRef 实现 ref 的透传， 可实现父组件操作子组件内的 ref
const Scroll = forwardRef((props, ref) => {
	const [bScroll, setBScroll] = useState(null)
	const scorollContainerRef = useRef()
	const { direction, click, refresh, bounceDown, bounceTop, onScroll, pullDown, pullUp, pullUpLoading, pullDownLoading } = props

	// 防抖
	let pullUpDebounce = useMemo(()=>{
		return debounce(pullUp, 300)
	},[pullUp])
		// 防抖
		let pullDownDebounce = useMemo(()=>{
			return debounce(pullDown, 300)
		},[pullDown])
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
		const handlePullUp = () => {
			//判断是否滑动到了底部
			if(bScroll.y <= bScroll.maxScrollY + 100){
				pullUpDebounce()
			}
		}
		bScroll.on('touchEnd',handlePullUp)
		return () => {
			bScroll.off('touchEnd', handlePullUp)
		}

	},[pullUp, pullUpDebounce, onScroll])
	// scrcoll 绑定事件
	useEffect(()=>{
		if(!bScroll || !pullDown) return 
		const handlePullDown = (position) => {
			if(position.y > 50){
				pullDownDebounce()
			}
		}
		bScroll.on('touchEnd',handlePullDown)
		return () => {
			bScroll.off('touchEnd', handlePullDown)
		}
	},[pullDown, pullDownDebounce, onScroll])

	// 刷新
	useEffect(()=>{
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
			{/* 下拉刷新 */}
			{pullDownLoading && <Loading2 />  }	
			{props.children}
			{/* 滑到底部 */}
			{pullUpLoading && 	<ScrollBottomLoading><Loading2 /> </ScrollBottomLoading> }	
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