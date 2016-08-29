'use strict'
import React from 'react'
import marked from 'marked'

export default class IconBtn extends React.Component{
    static propTypes(){
        cssName:React.PropTypes.string
        url:React.PropTypes.string
        iconName:React.PropTypes.string
        text:React.PropTypes.string
    }
    rawMarkup(){
        var rawMarkup=marked(this.props.iconName.toString(), {sanitize: true});
        return {__html:rawMarkup};
    }
    render(){
        let{cssName,url,text}=this.props;

        return(
            <a className={cssName} href={url}>
                <span className="iconfont" dangerouslySetInnerHTML={this.rawMarkup()}></span>
                <label>
                    {text}
                </label>
            </a>
        )
    }
}


