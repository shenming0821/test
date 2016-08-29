'use strict'

import React from 'react';
import ABtn from '../../../src/js/common/ABtn.js'

export default class Category extends React.Component{
    defaultProps(){
        return{
            brandData:[
                {
                    "aCss":"as",
                    "aText":"大众",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"宝马",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"奥迪",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"丰田",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"本田",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"大众",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"奔驰",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"别克",
                    "aUrl":"javascript:;"
                }
            ],
            moneyData:[
                {
                    "aCss":"",
                    "aText":"0-5万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"5-10万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"10-15万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"15-20万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"20-30万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"30-50万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"50-100万",
                    "aUrl":"javascript:;"
                },
                {
                    "aCss":"",
                    "aText":"100万以上",
                    "aUrl":"javascript:;"
                }
            ]
        }
    }
    getData(datas,keyName){
        var ABtns=[];
        datas.map(function(data,index){
            ABtns.push(<ABtn key={keyName+index} {...data} />);
        })
        return ABtns;
    }
    render(){
        var Datas=this.defaultProps(),
            brandData=this.getData(Datas["brandData"],"brand"),
            moneyData=this.getData(Datas["moneyData"],"money");

        return (
            <div className="category_box">
                <div className="clearfix">
                    {brandData}
                </div>
                <p></p>
                <div className="clearfix">
                    {moneyData}
                </div>
            </div>
        )
    }
}

