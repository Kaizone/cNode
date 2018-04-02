/**
 * Created by kk on 2018/4/1.
 */

import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import {Link}from'react-router-dom';
import data from './data';
import TxtDetails from'./txtdetails';
import Reply from './reply';
class Details extends Component{

    render(){
        return (
           <div className="wrap">
               <TxtDetails
                   loading={false}
                   data={data}
               />

               <Reply
                   loading={false}
                   replyCount={data.data.reply_count}
                   replies={data.data.replies}
               />
           </div>
        )
    }
}

export default Details;