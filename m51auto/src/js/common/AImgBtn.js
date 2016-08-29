'use strict'

import React,{Component} from 'react'

export default class AImgBtn extends Component{
    static propTypes(){
        aCss:React.PropTypes.string
        aUrl:React.PropTypes.string
        imgUrl:React.PropTypes.string
        imgAlt:React.PropTypes.string
        imgCss:React.PropTypes.string
    }
    render(){
        let {aCss,aUrl,imgUrl,imgCss,imgAlt}=this.props;
        return(
            <a className={aCss} href={aUrl}>
                <img className={imgCss} src={imgUrl} alt={imgAlt}/>
            </a>
        )
    }
}
