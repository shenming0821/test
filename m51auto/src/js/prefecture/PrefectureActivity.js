'use strict'

import React,{Component} from 'react';

export default class PrefectureActivity extends Component{

    static propTypes(){
        dataImg:React.PropTypes.string
        dataHref:React.PropTypes.string
        dataAlt:React.PropTypes.string
        activityTitle:React.PropTypes.string
        activityIntroduce:React.PropTypes.string
    }

    render(){
        let {dataImg,dataHref,dataAlt,activityTitle,activityIntroduce}=this.props;
        return(
            <a className="activityimg_box" href={dataHref}>
                <img src={dataImg}
                     alt={dataAlt}
                    />
                <p>{activityTitle}</p>
                <p>{activityIntroduce}</p>
            </a>
        )
    }
}
