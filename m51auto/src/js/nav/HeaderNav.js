'use strict'

import $ from 'jquery'
import React,{Component} from 'react';
import IconBtn from '../../../src/js/common/IconBtn';


export default class HeaderNav extends Component{
    //react 15版本getDefaultProps==》defaultProps
    defaultProps(){
            return{
                "headerNav":[
            {
                "cssName":"bz",
                "url":"javascript:;",
                "iconName":"&#xe606;",
                "text":"保障车"
            },
            {
                "cssName":"zc",
                "url":"javascript:;",
                "iconName":"&#xe606;",
                "text":"帮我找车"
            },
            {
                "cssName":"mc",
                "url":"javascript:;",
                "iconName":"&#xe600;",
                "text":"我要卖车"
            },
            {
                "cssName":"gj",
                "url":"javascript:;",
                "iconName":"&#xe607;",
                "text":"车辆估价"
            }
        ]
        }
    }
    render(){
        var iBtns=[],
            headerNav=this.defaultProps();
        headerNav["headerNav"].map(function(data,index){
            iBtns.push(<IconBtn key={"headerNav"+index} {...data} />);
        })

        return(
            <div className="header_nav_box">
                {iBtns}
            </div>
        )
    }
}
