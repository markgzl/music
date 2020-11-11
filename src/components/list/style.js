import styled from 'styled-components'
import style from '../../assets/global-style'

export const ListWrap = styled.div`
    padding: 0 2%;
    .recommend-title{
        line-height: 50px;
    }
`

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ListItem = styled.div`
    position: relative;
    width: 32%;
    .img-wrap{
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        position: relative;
        img{
            position: absolute;
            border-radius: 6px;
        }
    }
    .play-count{
        position: absolute;
        top: 6px;
        right: 6px;
        font-size: ${style["font-size-s"]};
        line-height: 15px;
        color: ${style["font-color-light"]};
    }
    .play{
        vertical-align: top;
    }
    .desc {
      overflow: hidden;
      margin-top: 2px;
      padding: 0 2px;
      height: 36px;
      text-align: left;
      font-size: ${style["font-size-s"]};
      line-height: 1.5;
      color: ${style["font-color-desc"]};
      margin-bottom: 8px;
    }
    &:after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 80px;
        border-radius: 6px;
        background: linear-gradient(hsla(0,0%,43%,.4), hsla(0,0%,100%,0));
    }
`