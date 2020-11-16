import styled from 'styled-components'
import style from '../../assets/global-style'

export const HeaderWrap = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: white;
	line-height: 40px;
	background-color: transparent;
	font-size: ${style["font-size-l"]};
    font-weight: 700;
	.back{
		display: inline-block;
		margin: 0 5px 0 10px;
	}
`