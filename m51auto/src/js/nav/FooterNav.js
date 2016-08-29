'use strict'

import React,{Component} from 'react';
import IconBtn from '../../../src/js/common/IconBtn.js'

export default class FooterNav extends Component{
    defaultProps() {
        return {
            "platformsNav": [
                {
                    "cssName": "on",
                    "url": "javascript:;",
                    "iconName": "&#xe60b;",
                    "text": "首页"
                },
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe610;",
                    "text": "买车"
                },
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe612;",
                    "text": "卖车"
                },
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe602;",
                    "text": "APP下载"
                }
            ]
        }
    }


    render(){
        let platformsNavData=this.defaultProps(),
            navHtmls=[];
        platformsNavData["platformsNav"].map(function(value,index){
            navHtmls.push(
                <IconBtn key={"platforms"+index} {...value} />
            );
        });

        return(
            <div className="footer_box p-fixd">
                {navHtmls}
            </div>
        )
    }
}