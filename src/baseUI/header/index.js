import React, { memo, forwardRef } from 'react'
import { HeaderWrap } from './style'
import PropTypes from 'prop-types'

const Header = forwardRef((props, ref) => {
	const { title, handleClick } = props
	return (
		<HeaderWrap ref={ref}>
			<i className="iconfont back"  onClick={handleClick}>&#xe655;</i>
			<h1>{title}</h1>
		</HeaderWrap>
	)
})
Header.propTypes = {
	handleClick: PropTypes.func,
	title: PropTypes.string
}
Header.defaultProps = {
	handleClick: () => {},
	title: '返回'
}

export default memo(Header)