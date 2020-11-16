import styled from 'styled-components'
import style from '../../assets/global-style'

export const Container = styled.div`
	position: fixed;
	top: 94px;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	h2{
		margin: 10px;
		padding-top: 15px;
		font-weight: 700;
		font-size: ${style["font-size-m"]};
		color: ${style["font-color-desc"]};
	}
`

export const List = styled.ul`
	display: ${props => props.isRow ? 'flex' : ''};
	position: relative;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	padding-left: 10px;
`

export const ListItem = styled.li`
	flex: 1;
	display: flex;
	padding: 5px 0;
	border-bottom: 1px solid ${style['border-color']};
	.img-wrap{
		width: ${props => props.isRow ? '27vw' : '32vw'};;
		height: ${props => props.isRow ? '27vw' : '32vw'};;
		position: relative;
		&::after{
			position: absolute;
			content: "";
			left: 0;
			bottom: 0;
			width: 100%;
			height: 50px;
			border-radius: 4px;
			background: linear-gradient(hsla(0,0%,100%,0), hsla(0,0%,43%,.4));
		}
		img{
			width: 100%;
			height: 100%;
		}
		.desc{
			position: absolute;
			bottom: 0;
			left: 8px;
			padding: 4px 0;
			font-size: ${style["font-size-ss"]};
			color: #fff;
		}
	}
`

export const SongList = styled.ul`
	flex: 1;
	direction: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 10px;
	li{
		font-size: ${style["font-size-s"]};
		color: grey;
		margin-top: 10px;
		padding-left: 10px;
	}
`