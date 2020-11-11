import styled from 'styled-components'
import style from '../../assets/global-style'

export const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	margin: auto;
	background-color: white;
	&:after{
		position: absolute;
		content: "";
		top: 0;
		left: 0;
		right: 0;
		bottom: 45px;
		background-color: ${style['theme-color']};
	}

	.slider-container{
		width: 98%;
		position: relative;
		height: 160px;
		overflow: hidden;
		margin: auto;
		border-radius: 8px;

		.slider-nav {
			position: absolute;
			display: block;
			width: 100%;
			height: 100%;
		}
		.swiper-pagination-bullet-active {
			background: ${style ["theme-color"]};
		}
	}
`