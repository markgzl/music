import React, { memo } from 'react'
import LazyLoad from 'react-lazyload'
import { ListWrap, List, ListItem } from './style'
import { getCount } from '../../utils/count'



const RecommendList =({recommendList=[]})=>{
    
    return (
        <ListWrap>
            <h2 className='recommend-title'>推荐歌单</h2>
            <List>
                {
                    recommendList.map(item=>(
                        <ListItem key={item.id}>
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

export default memo(RecommendList)