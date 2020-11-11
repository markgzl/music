import styled from 'styled-components'
import style from '../../assets/global-style'

export const Top = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 5px 10px;
	background: ${style['theme-color']};
	&>span{
		line-height: 40px;
		color: white;
		font-size: 20px;
		&.iconfont{
			font-size: 24px;
		}
	}
`

export const Tab = styled.div`
	height: 44px;
	display: flex;
	justify-content: space-between;
	background: ${style['theme-color']};

	&>a{
		flex: 1;
		text-align: center;
		color: #f1f1f1;
		padding-top: 10px;

		&.selected{
			span{
				font-weight: 700;
				border-color: #f1f1f1;
			}
		}
	}
`

export const TabItem = styled.span`
	border-bottom: 2px solid transparent;
	padding-bottom: 3px;
`