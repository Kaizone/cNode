/**
 * Created by kk on 2018/4/1.
 */

import React,{Component}from 'react';
import {Avatar,Row,Col}from 'antd';
import {connect} from 'react-redux';
import axios from 'axios';
import UserList from './userlist';
//import data from './data';

class User extends Component{

    constructor(args){
        super(args);

        this.state = {
            id:this.props.match.params.id
        };

        this.getData(this.state.id)
    }

    /*点击名字跳转*/
    shouldComponentUpdate(nextProps,stateProps){
        if(this.props.match.params.id !== nextProps.match.params.id){
            this.getData(nextProps.match.params.id);
            return false;
        }
        return true
    }

    getData(id){
        this.props.dispatch((dispatch)=>{
            dispatch({
                type:"USER_UPDATA"
            });

            axios.get(`https://cnodejs.org/api/v1/user/${id}`)
                .then((res)=>{
                    dispatch({
                        type:"USER_UPDATA_SUCC",
                        data: res.data
                    });
                })
                .catch((error)=>{
                    dispatch({
                        type:"USER_UPDATA_ERROR"
                    });
                })
        })
    }

    render(){
        console.log(this.props);
        let{loading,data} = this.props;
        let {avatar_url,loginname,score,create_at,recent_topics,recent_replies} = data;

        return (
            <div className="wrap">
                <div>
                    <Avatar className="user-avatar" src={avatar_url}/>
                </div>
                <Row className="user-infor">
                    <Col md={8}>
                        用户名:<a>{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分:<a>{score}</a>
                    </Col>
                    <Col md={8}>
                        注册时间:<a>{create_at.split("T")[0]}</a>
                    </Col>
                </Row>
                <UserList
                    data={recent_topics}
                    loading={loading}
                    title="最近的话题"
                />
                <UserList
                    data={recent_replies}
                    loading={loading}
                    title="最近的回复"
                />
            </div>

        )
    }
}


export default connect(state=>state.user)(User);