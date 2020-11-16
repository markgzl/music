import React, { memo } from 'react'
import LazyLoad from 'react-lazyload'
import { ListWrap, List, ListItem } from './style'
import { getCount } from '../../utils/count'
import { withRouter } from 'react-router-dom'


const RecommendList =(props)=>{

    const enterDetail = (id) => {
        console.log(props,'---')
        props.history.push(`/recommend/${id}`)
       
    }
    
    return (
        <ListWrap>
            <h2 className='recommend-title'>推荐歌单</h2>
            <List>
                {
                    props.recommendList.map(item=>(
                        <ListItem key={item.id} onClick={()=>enterDetail(item.id)}>
                            <div className='img-wrap'>
                            <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music"/>}>
                                    <img src={item.picUrl} width='100%' height='100%' alt='推荐' />
                                </LazyLoad>
                            </div>
                            <div className='play-count'>
                                <i className="iconfont play">&#xe885;</i>
                                <span className='count'>{getCount(item.playCount)}</span>
                            </div>
                            <div className='desc'>{item.name}</div>
                        </ListItem>
                    ))
                }
                
            </List>
        </ListWrap>
    )
}

export default memo(withRouter(RecommendList))