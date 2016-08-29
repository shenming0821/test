'use strict'

import React,{Component} from 'react';

export default class HeaderSearch extends Component{
    render(){
        return(
            <a className="search_text_box" href="javscript:;">
                <span className="iconfont">&#xe616;</span>
                <input type="text" placeholder="请输入想找的车系/车型"/>
            </a>
        )
    }
}