/**
 * Created by kk on 2018/4/1.
 */
import React,{Component} from 'react';

import {List,Avatar,Row,Col} from 'antd';
import {Link}from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import data from './data';

import TxtTag from '../tag';
class Indexlist extends Component{

    constructor(args){
        super(args);

        this.state = {
            page:1
        };

        this.getData(this.props.tab);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState);
        if(this.props.tab !== nextProps.tab){
            this.getData(nextProps.tab);
            return false
        }

        return true
    }

    getData(tab){
        //网速加载慢处理
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"LIST_UP"
            })
        });

        this.props.dispatch( (dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=&${this.state.page}&limit
            =15`)
            .then(res=>{
                console.log(res);
                dispatch({
                    type:"LIST_UPDATA_SUCC",
                    data:res.data
                })
            })
            .catch(error=>{
                console.log(error);

                dispatch({
                    type:"LIST_UPDATA_ERROR",
                    data:error
                })
            })
        } )

    }

    render(){
        //需要的数据，tab,page,loading,data
        console.log(this.props)
        let {loading,data} = this.props;
        return (

            <List
                loading={loading}
                dataSource={data}
                renderItem={item =>(
                <List.Item actions={["回复:"+item.reply_count,"访问:"+item.visit_count]}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.author.avatar_url} />}
                        title={<div><TxtTag data={item}/><Link to={"/details/"+item.id}>{item.title}</Link></div>}
                        description={<p><Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                            发表于：{item.create_at.split('T')[0]}</p>}
                    />
                    {/*item.content*/}
                </List.Item>)}
            ></List>
        )
    }
}

export default connect(state=>state.list) (Indexlist);