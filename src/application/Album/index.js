import React, { memo, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container } from './style'
import Header  from '../../baseUI/header'

const Album = (props) => {
	const [showStatus, setShowStatus] = useState (true);
	const transitionRef = useRef()
	const handleBack = () => {
		setShowStatus(false)
	}
	return (
		<CSSTransition in={showStatus} timeout={300} classNames='fly' appear={true} onExited={props.history.goBack} unmountOnExit>
			<Container>
				<Header title={'返回'} handleClick={handleBack} ref={transitionRef} />
				<button onClick={handleBack}>back</button>
			</Container>
		</CSSTransition>
	)
}
export default memo(Album)