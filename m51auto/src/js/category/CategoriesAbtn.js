'use strict'

import React,{PropTypes,Component} from 'react';

export default class CategoriesAbtn extends Component{
    static propTypes(){
        categoriesCss:PropTypes.string
        categoriesUrl:PropTypes.string
        title:PropTypes.string
        txt:PropTypes.string
        imgUrl:PropTypes.string
        imgAlt:PropTypes.string
    }
    render(){
        let {categoriesCss,categoriesUrl,title,txt,imgUrl,imgAlt} = this.props;
        return(
            <a
                className={categoriesCss}
                href={categoriesUrl}
            >
                <h2>{title}</h2>
                <p>{txt}</p>
                <img src={imgUrl} alt={imgAlt}/>
            </a>
        )
    }
}
