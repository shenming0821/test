'use strict'

import React,{Component} from 'react';
import Title from '../../../src/js/common/Title';
import AImgBtn from '../../../src/js/common/AImgBtn.js';
import ABtn from '../../../src/js/common/ABtn.js';

export default class Car extends Component{
    render(){
        let carData=this.props,
            aBtns=[],
            carCss=carData["carCss"];

        carData["moneyData"].map(function(data,index){
            aBtns.push(<ABtn key={carData["keyname"]+index} {...data} />);
        });


        return(
            <div className={"car_box "+carCss}>
                <Title {...carData["title"][0]} />
                <AImgBtn {...carData["imgData"][0]} />
                <div className="btns_box">
                    {aBtns}
                </div>
                <ABtn {...carData["moreData"][0]} />
            </div>
        )
    }
}
