/**
 * Created by kk on 2018/4/2.
 */
import React,{Component} from 'react';
import {Card,Avatar} from 'antd';
import {Link}from'react-router-dom';
import TxtTag from '../tag';

class TxtDetails extends Component{

    render(){
        let {loading,data} = this.props;
        const title = (
            <div>
                <h1>{data.title}</h1>
                <div>
                    <TxtTag data={data}></TxtTag>
                    <Avatar src={data.author.avatar_url}></Avatar>
                    <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
                    发表于:{data.create_at.split("T")[0]}
                </div>
            </div>
        )
        return (
                <Card
                    title={title}

                >
                    <div dangerouslySetInnerHTML={
                        {__html:data.content}
                    }>
                    </div>

                </Card>
        )
    }
}

export default TxtDetails;