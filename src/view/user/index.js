/**
 * Created by kk on 2018/4/1.
 */

import React,{Component}from 'react';
import {Avatar,Row,Col}from 'antd';
import UserList from './userlist';
import data from './data';

class User extends Component{

    render(){
        console.log(data.data)
        let {avatar_url,loginname,score,create_at,recent_topics,recent_replies} = data.data;
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
                    loading={false}
                    title="最近的话题"
                />
                <UserList
                    data={recent_replies}
                    loading={false}
                    title="最近的回复"
                />
            </div>

        )
    }
}


export default User;