/**
 * Created by kk on 2018/4/1.
 */
import React,{Component} from 'react';

import CardTemplate from '../cardTemplate';
import data from './data';
class About extends Component{

    render(){
        return (
            <CardTemplate data={data}/>
        )
    }
}


export default About;