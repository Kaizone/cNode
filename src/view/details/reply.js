/**
 * Created by kk on 2018/4/2.
 */

import React,{Component} from 'react';
import {Link}from 'react-router-dom';
import {Card,Avatar,List}from'antd';
import data from './data';

class Reply extends Component{

    render(){
        console.log(this.props)
        let {loading,replyCount,replies} = this.props; //解构
        return(
            <Card
                loading={loading}
                type="inner"
                title={replyCount+'人回复'}

            >
                <List
                    loading={false}
                    dataSource={replies}
                    itemLayout="vertical"

                    className="reply-list"
                    renderItem={(item)=>(
                        <List.Item
                            key={item.id}
                            extra={item.ups.length>0?<span>有{item.ups.length}人觉得赞</span>:""}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url}/>}
                                description={
                                <div>
                                    <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                    <span>发表于:{item.create_at.split("T")[0]}</span>
                                </div>
                                }
                            />
                            <div dangerouslySetInnerHTML={{__html:item.content}}>

                            </div>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        )
    }
}

export default Reply;