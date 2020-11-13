import styled from 'styled-components'
import style from '../../assets/global-style'
export const CatScrollWrap = styled.div`
	position: fixed;
	top: 94px;
	padding: 5px 10px;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
`

export const SingerListWrap = styled.div`
	position: fixed;
	top: 175px;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	padding-top: 15px;
`
export const SingerBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10px 0 10px 10px;
	border-bottom: 1px solid ${style["border-color"]};
  	.img-wrap {
		margin-right: 20px;
		img {
			border-radius: 3px;
			width: 50px;
			height: 50px;
		}
	}
	.name {
		font-size: ${style["font-size-m"]};
		color: ${style["font-color-desc"]};
		font-weight: 500;
	}

`