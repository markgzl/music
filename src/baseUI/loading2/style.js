import styled, { keyframes } from 'styled-components'
import style from '../../assets/global-style'
const dance = keyframes`
	0%, 40%, 100% {
		transform: scaleY(0.4);
		transform-origin: center 100%;
	}
	20%{
		transform: scaleY(1);
	}
`

export const Loading = styled.div`
	height: 30px;
	width: 100%;
	text-align: center;
	font-size: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${style['font-color-desc']};
	top: 0;
	position: absolute;
	left: 0;
	div{
		height: 10px;
		width: 1px;
		margin: 0 2px;
		background-color: ${style['theme-color']};
		animation: ${dance} 1s infinite ease;
	}
	div:nth-child(2) {
		animation-delay: 0.4s;
	}
	div:nth-child(3) {
		animation-delay: 0.6s;
	}
	div:nth-child(4) {
		animation-delay: 0.5s;
	}
	div:nth-child(5) {
		animation-delay: 0.2s;
	} 
`