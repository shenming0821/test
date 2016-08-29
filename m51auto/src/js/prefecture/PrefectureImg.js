'use strict'

import React,{Component} from 'react';

export default class PrefectureImg extends Component{

    static propTypes(){
        dataImg:React.PropTypes.string
        dataHref:React.PropTypes.string
        dataAlt:React.PropTypes.string
    }

    render(){
        let {dataImg,dataHref,dataAlt}=this.props;
        return(
            <div className="img_box p-rel">
                <img src={dataImg}
                     alt={dataAlt}/>
                <a className="p-abs" href={dataHref}>
                    <span>进入专区</span>
                </a>
            </div>
        )
    }
}
