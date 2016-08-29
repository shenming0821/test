'use strict'
import React,{Component} from 'react';
import HeaderLogo from '../../../src/js/header/HeaderLogo'
import HeaderRegion from '../../../src/js/header/HeaderRegion'
import HeaderSearch from '../../../src/js/header/HeaderSearch'


export default class Header extends Component{
    render(){
        return(
            <header className="header_box">
                <HeaderLogo />
                <div className="search_box">
                    <HeaderRegion/>
                    <HeaderSearch />
                </div>
            </header>
        );
    }
};
