/**
 * Created by kk on 2018/4/1.
 */
import React,{Component} from 'react';

import{Menu,Row,Col}from 'antd';
import {Link}from 'react-router-dom';
import Indexlist from './list';
class Index extends Component{
    render(){

        let tab = this.props.match.params.id;
        console.log(tab)
        return (

            <Row className="wrap">
                <Col md={6}>
                    <Menu id="index-nav">
                        <Menu.Item>
                            <Link to="/index/all">全部</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/good">精华</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/ask">问题</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/share">分享</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/job">招聘</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/index/dev">测试</Link>
                        </Menu.Item>
                    </Menu>
                </Col>

                <Col md={18} className="index-list" >
                    <Indexlist tab={tab}></Indexlist>
                </Col>
            </Row>
        )
    }
}

export default Index;