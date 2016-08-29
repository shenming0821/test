'use strict';
const data = {
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


data['platformsNav'].map(function (value,key) {
    console.log(...value);
})