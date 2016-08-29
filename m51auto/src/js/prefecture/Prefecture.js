'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Title from '../../../src/js/common/Title.js';
import Btn from '../../../src/js/common/ABtn.js'
import PrefectureImg from '../../../src/js/prefecture/PrefectureImg.js';
import PrefectureActivity from '../../../src/js/prefecture/PrefectureActivity.js';

export default class Prefecture extends Component{
    constructor(){
        super();
        this.state={
             dataImg:"",
             dataHref:"",
             dataAlt:"",
             activityTitle:"",
             activityIntroduce:""
        }
    }
    handleClick(e){
        let oA=e.target,
            cssName=this.props.pitchOnCss;
        $(oA).parent().find("a").removeClass(cssName);
        //$(oA).sibling().removeClass("on");
        $(oA).addClass(cssName);
        this.setState({
            dataImg:oA.getAttribute("data-img"),
            dataHref:oA.getAttribute("data-href"),
            dataAlt:oA.innerText,
            activityTitle:oA.getAttribute("data-title"),
            activityIntroduce:oA.getAttribute("data-introduce")
        });
    }
    //初始化state值
    componentDidMount(){
        let btnsData=this.props.btnsData[0];
        this.setState({
            dataImg:btnsData.dataImg,
            dataHref:btnsData.dataHref,
            dataAlt:btnsData.aText,
            activityTitle:btnsData.dataTitle,
            activityIntroduce:btnsData.dataIntroduce
        });
    }
    render(){
        let {titleData,btnsData,imgModuleName,pitchOnCss}=this.props,
            titles=[],
            btns=[],
            imgs=[],
            _self=this;
        titles.push(
            <Title key={imgModuleName} {...titleData[0]} />
        );

        btnsData.map(function(value,index){
            btns.push(
                <Btn key={imgModuleName+index} handleClick={_self.handleClick.bind(_self)} {...value}  ></Btn>
            );
        });
        imgs.push(
            imgModuleName==="prefecture"?<PrefectureImg key="pimg" {...this.state}/>:<PrefectureActivity key="pac" {...this.state}/>
        )


        return(
                <div className="prefecture_box">
                    {titles}
                    <div key="aa" className="btn_box clearfix">
                        {btns}
                    </div>
                    {imgs}
                </div>
            )
    }
}
