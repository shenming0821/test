'use strict'

import React,{Component} from 'react';
import IconBtn from '../../../src/js/common/IconBtn.js'

export default class PlatformsNav extends Component{
    defaultProps() {
        return {
            "platformsNav": [
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe608;",
                    "text": "触屏版"
                },
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe609;",
                    "text": "电脑版"
                },
                {
                    "cssName": "",
                    "url": "javascript:;",
                    "iconName": "&#xe601;",
                    "text": "APP"
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
            <div className="platforms_box">
                {navHtmls}
            </div>
        )
    }
}