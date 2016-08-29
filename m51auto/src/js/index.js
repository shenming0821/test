'use strict'

require('../../src/scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
//webpack解压错误：找不到Header模块
//原因是压缩的js和Header不在同一个目录下，所以只要将导入的路径按照项目跟目录导入就可解决
import Header from '../../src/js/header/Header';
import HeaderNav from '../../src/js/nav/HeaderNav';
import Title from '../../src/js/common/Title.js';
import Category from '../../src/js/category/Category.js';
import Categories from '../../src/js/category/Categories.js';
import Car from '../../src/js/car/Car.js';
import AD from '../../src/js/common/AD.js';
import Prefecture from '../../src/js/prefecture/Prefecture';
import PlatformsNav from '../../src/js/nav/PlatformsNav.js';
import FooterNav from '../../src/js/nav/FooterNav.js';




class Atest extends React.Component{
    //楼型车型数据，认证专区，优惠活动
    defaultProps(){
        return {
            "zxcar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: "",
                        btnState:"0"
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: "",
                        btnState:"0"
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: "",
                        btnState:"0"
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: "",
                        btnState:"0"
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car1.png",
                        imgAlt: "准新车"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"准新车",
                    titleCss:"title_zx"
                }],
                keyname: "zxc",
                carCss: "car_zx"
            },
            "lscar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: ""
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car2.png",
                        imgAlt: "练手车"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"练手车",
                    titleCss:"title_ls"
                }],
                keyname: "lsc",
                carCss: "car_ls"
            },
            "jycar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: ""
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car3.png",
                        imgAlt: "家用代步车"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"家用代步车",
                    titleCss:"title_jy"
                }],
                keyname: "jyc",
                carCss: "car_jy"
            },
            "suvcar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: ""
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car4.png",
                        imgAlt: "SUV越野"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"SUV越野",
                    titleCss:"title_suv"
                }],
                keyname: "suvc",
                carCss: "car_suv"
            },
            "mpvcar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: ""
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car5.png",
                        imgAlt: "MPV商务车"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"MPV商务车",
                    titleCss:"title_mpv"
                }],
                keyname: "mpvc",
                carCss: "car_mpv"
            },
            "jpcar": {
                moneyData: [
                    {
                        aText: "10万以下",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "10-20万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "20-30万",
                        aUrl: "javacript:;",
                        aCss: ""
                    },
                    {
                        aText: "30万以上",
                        aUrl: "javacript:;",
                        aCss: ""
                    }
                ],
                imgData: [
                    {
                        aCss: "img_box",
                        aUrl: "JavaScript:;",
                        imgUrl: "http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/car6.png",
                        imgAlt: "精品豪车"
                    }
                ],
                moreData: [{
                    aText: "查看更多",
                    aUrl: "javacript:;",
                    aCss: "more"
                }],
                title:[{
                    titleText:"精品豪车",
                    titleCss:"title_jp"
                }],
                keyname: "jpc",
                carCss: "car_jp"
            },
            "prefecture":{
                titleData:[
                    {
                        titleText:"厂商认证专区",
                        titleCss:"title_prefecture"
                    }
                ],
                btnsData:[
                    {
                        "aText":"路虎认证",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/firm_approve/fa_1.jpg",
                        "dataHref":"http://www.51auto.com/brandzone/landrover/index",
                        
                        'aCss':"w190 on",
                        "btnState":"1"
                    },
                    {
                        "aText":"捷豹认证",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/firm_approve/fa_2.jpg",
                        "dataHref":"http://www.51auto.com/brandzone/jaguar/index",
                        
                        'aCss':"w190",
                        "btnState":"1"
                    },
                    {
                        "aText":"奔驰星睿",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/firm_approve/fa_4.jpg",
                        "dataHref":"http://www.51auto.com/zhuanti/starelite/index.jsp",
                        
                        'aCss':"w190 mr0",
                        "btnState":"1"
                    },
                    {
                        "aText":"上汽通用诚新",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/firm_approve/fa_3.jpg",
                        "dataHref":"http://www.51auto.com/chengxin/",
                        
                        'aCss':"w290",
                        "btnState":"1"
                    },
                    {
                        "aText":"保时捷认可易手车",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/firm_approve/fa_9.jpg",
                        "dataHref":"http://www.51auto.com/hdealer_428717/",
                        
                        'aCss':"w290 mr0",
                        "btnState":"1"
                    }
                ],
                imgModuleName:"prefecture",
                pitchOnCss:"on"
            },
            "activity":{
                titleData:[
                    {
                        titleText:"最新优惠活动",
                        titleCss:"title_prefectureActivity"
                    }
                ],
                btnsData:[
                    {
                        "aText":"奔驰威霆奢华定制",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/1.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/69#ad-image-0",
                        'aCss':"w290 activity",
                        "dataTitle":"奔驰威霆奢华定制",
                        "dataIntroduce":"全系九折，尊享豪华，舒适安全。",
                        "btnState":"2"
                    },
                    {
                        "aText":"爱 “GO” 就购",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/2.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/76#ad-image-0",
                        
                        'aCss':"w290 mr0",
                        "dataTitle":"爱 “GO” 就购",
                        "dataIntroduce":"置换补贴10,000元起 你旅游，我买单2,000元旅游基金",
                        "btnState":"2"
                    },
                    {
                        "aText":"清凉钜惠",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/5.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/77#ad-image-0",
                        
                        'aCss':"w140",
                        "dataTitle":"清凉钜惠",
                        "dataIntroduce":"购车可得2000元旅游基金！ 爱GO就“购”！",
                        "btnState":"2"
                    },
                    {
                        "aText":"旅游我买单",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/5.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/77#ad-image-0",
                        
                        'aCss':"w140",
                        "dataTitle":"旅游我买单",
                        "dataIntroduce":"购车可得2000元旅游基金！ 爱GO就“购”！",
                        "btnState":"2"
                    },
                    {
                        "aText":"SUV&跑车",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/5.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/77#ad-image-0",
                        
                        'aCss':"w140",
                        "dataTitle":"SUV&跑车",
                        "dataIntroduce":"购车可得2000元旅游基金！ 爱GO就“购”！",
                        "btnState":"2"
                    },
                    {
                        "aText":"旅游我买单",
                        "dataImg":"http://cdn01.51autoimg.com/apps/m.51auto.3.0.com/src/css/images/new_coupon/5.jpg",
                        "dataHref":"http://www.51auto.com/v2/car/promotion/activity/77#ad-image-0",
                        
                        'aCss':"w140 mr0",
                        "dataTitle":"旅游我买单",
                        "dataIntroduce":"购车可得2000元旅游基金！ 爱GO就“购”！",
                        "btnState":"2"
                    }
                ],
                imgModuleName:"activity",
                pitchOnCss:"activity"
            }
        }
    }

    render(){
        let carDatas=this.defaultProps();
        return(
            <div>
                <Header />
                <HeaderNav />
                <Title titleText="快速找车" titleAText="更多" titleAURL="http://m.51auto.com/shanghai/search/"/>
                <Category />
                <Categories />
                <Car {...carDatas["zxcar"]} />
                <AD />
                <Car {...carDatas["lscar"]} />
                <Car {...carDatas["jycar"]} />
                <Car {...carDatas["suvcar"]} />
                <Car {...carDatas["mpvcar"]} />
                <Car {...carDatas["jpcar"]} />
                <Prefecture {...carDatas["prefecture"]}/>
                <Prefecture {...carDatas["activity"]} />
                <PlatformsNav />
                <FooterNav />
            </div>
        )
    }
}


ReactDOM.render(<Atest />,document.getElementById("content"));