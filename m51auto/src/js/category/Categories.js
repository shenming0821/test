'use strict'

import React from 'react';
import CategoriesAbtn from '../../../src/js/category/CategoriesAbtn.js'

export default class Categories extends React.Component{

    defaultProps(){
        return {
            categoriesData:[
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"准新车",
                    txt:"完美车况表现如新",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype1.png",
                    imgAlt:"准新车"
                },
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"练手车",
                    txt:"便宜有好车",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype2.png",
                    imgAlt:"练手车"
                },
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"家用代步车",
                    txt:"就是要实惠",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype3.png",
                    imgAlt:"家用代步车"
                },
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"SUV越野",
                    txt:"超大空间宜家宜行",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype4.png",
                    imgAlt:"SUV越野"
                },
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"MPV商务车",
                    txt:"何至于大？",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype5.png",
                    imgAlt:"MPV商务车"
                },
                {
                    categoriesCss:"",
                    categoriesUrl:"javascript:;",
                    title:"精品豪车",
                    txt:"轻松升级座驾",
                    imgUrl:"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/caytype6.png",
                    imgAlt:"精品豪车"
                }
            ]
        }
    }


    render(){
        var datas=this.defaultProps(),
            categoriesAbtns=[];

        datas["categoriesData"].map(function(data,index){
            categoriesAbtns.push(<CategoriesAbtn key={"categories"+index} {...data} />);
        })


        return(
            <div className="categories_box">
                {categoriesAbtns}
            </div>
        )
    }
}

