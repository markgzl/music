import React from 'react'
import styled, { keyframes } from 'styled-components'
import style from '../../assets/global-style'

const loading = keyframes`
	0%, 100% {
		transform: scale(0,0)
	}
	50%{
		transform: scale(1,1)
	}
`

const LoadingAnimate = styled.div`
	>div{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 1024;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		opacity: 0.6;
		background-color: ${style['theme-color']};
		animation: ${loading} 1.4s infinite ease-in;
	}
	>div:nth-child(2){
		animation-delay: 0.7s;
	}
	
`

const Loading = () => {
	return <LoadingAnimate>
		<div></div>
		<div></div>
	</LoadingAnimate>
}

export default Loading