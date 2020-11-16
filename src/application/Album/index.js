import React, { memo, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Container,Top, Action } from './style'
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
				<Top>
					<div>
						<div className='img-wrap'>
							<img />
							<div className='play'></div>
						</div>
						<div className='song-desc'>
							<h2>sa</h2>
							<div>
								<img />
								<div></div>
							</div>
						</div>
					</div>
					<Action>
						<div className='action-item'>
							<div><i className="iconfont">&#xe6ad;</i></div>
							<div>评论</div>
						</div>
						<div className='action-item'>
							<div><i className="iconfont">&#xe86f;</i></div>
							<div>点赞</div>
						</div>
						<div className='action-item'>
							<div><i className="iconfont">&#xe62d;</i></div>
							<div>收藏</div>
						</div>
						<div className='action-item'>
							<div><i className="iconfont">&#xe606;</i></div>
							<div>更多</div>
						</div>
					</Action>
				</Top>
			</Container>
		</CSSTransition>
	)
}
export default memo(Album)