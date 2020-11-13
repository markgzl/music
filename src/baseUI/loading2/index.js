import React from 'react'
import { Loading } from './style'

const Loading2 = () => {
	return <Loading>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<p>玩命加载中……</p>
	</Loading>
}

export default React.memo(Loading2)