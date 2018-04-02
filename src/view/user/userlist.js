/**
 * Created by kk on 2018/4/2.
 */
import React,{Component}from 'react';
import {Avatar,Card,List}from 'antd';
import {Link} from 'react-router-dom';

class UserList extends Component{

    render(){
        let {data,title,loading} = this.props;
        console.log(data);
        return(
            <Card
                title={title}
                type="inner"
            >
                <List
                    loading={loading}
                    dataSource={data}
                    renderItem={(item)=>(
                        <List.Item actions={["最后回复时间:"+item.last_reply_at.split("T")[0]]}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} />}
                                description={
                                    <div>
                                        <Link className="user-name" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                        <Link to={"/details/"+item.id}>{item.title}</Link>
                                    </div>
                                }
                            >

                            </List.Item.Meta>
                        </List.Item>
                    )}
                >

                </List>
            </Card>
        )
    }
}

export default UserList