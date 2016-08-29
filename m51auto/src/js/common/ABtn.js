'use strict'

import React,{Component} from 'react'

export default class ABtn extends Component{
    //最底层组件给他设置个默认值，方便以后扩展
    static propTypes(){
        aCss:React.PropTypes.string
        aUrl:React.PropTypes.string
        aText:React.PropTypes.string
        handleClick:React.PropTypes.function
        dataTitle:React.PropTypes.string
        dataIntroduce:React.PropTypes.string
        btnState:React.PropTypes.string
        dataImg:React.PropTypes.string
        dataHref:React.PropTypes.string
    }
    static defaultProps(){
        return{
            aCss:"",
            aUrl:"",
            aText:"",
            handleClick:"",
            dataTitle:"",
            dataIntroduce:"",
            btnState:"",
            dataImg:"",
            dataHref:""
        }
    }


    render(){
        let {aCss,aUrl,aText,handleClick,dataTitle,dataIntroduce,dataImg,dataHref}=this.props;
        return(
            <a className={aCss}
               href={aUrl}
               data-img={dataImg}
               data-href={dataHref}
               data-title={dataTitle}
               data-introduce={dataIntroduce}
               onClick={handleClick}
                >
                {aText}
            </a>
        )
    }
}
