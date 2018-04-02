/**
 * Created by kk on 2018/4/1.
 */

import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import {Link}from'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import TxtDetails from'./txtdetails';
import Reply from './reply';
class Details extends Component{

    constructor(args){
        super(args);

        this.state={
            id:this.props.match.params.id
        };

        this.getData(this.state.id);
    }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"DETAILS_UP"
            });
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
            .then(res=>{
                console.log(res);
                dispatch({
                    type:"DETAILS_UPDATA_SUCC",
                    data:res.data
                })
            })
            .catch(error=>{
                console.log(error);
                dispatch({
                    type:"DETAILS_UPDATA_ERROR",
                    data:[]
                })
            })
        })
    }

    render(){
        console.log(this.props);
        let {loading,data} = this.props;
        return (
           <div className="wrap">
               <TxtDetails
                   loading={loading}
                   data={data}
               />

               <Reply
                   loading={loading}
                   replyCount={data.reply_count}
                   replies={data.replies}
               />
           </div>
        )
    }
}

export default connect(state=>(state.details))(Details) ;