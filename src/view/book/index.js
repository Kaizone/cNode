/**
 * Created by kk on 2018/4/1.
 */

import React,{Component} from 'react';
import {Card} from 'antd';
import CardTemplate from '../cardTemplate';

import data from './data';
class Book extends Component{

    render(){
        return (
            <CardTemplate data={data}></CardTemplate>
        )
    }
}

export default Book;