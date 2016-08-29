'use strict'

import React,{PropTypes,Component} from 'react'

export default class Title extends Component{
    static propTypes(){
        titleCss:PropTypes.string
        titleText:PropTypes.string
        titleAText:PropTypes.string
        titleAURL:PropTypes.string
    }
    static defaultProps(){
        return{
            titleCss:"",
            titleText:"",
            titleAText:"",
            titleAURL:""
        }
    }

    render(){
        //是否需要隐藏a标签
        let titleCss="title_box "+this.props.titleCss,
            {littleCss,titleText,titleAURL,titleAText}=this.props;

        return(
            <div className={titleCss} >
                <span>
                    {titleText}
                </span>
                <a className={littleCss} href={titleAURL}>
                    <span>
                        {titleAText}
                    </span>
                    <em className="iconfont">&#xe60e;</em>
                </a>
            </div>
        )
    }
}

/*
Title.propTypes={
    titleCss:PropTypes.string,
    titleText:PropTypes.string,
    titleAText:PropTypes.string,
    titleAURL:PropTypes.string
}*/
