/**
 * Created by kk on 2018/4/1.
 */
import React,{Component}from 'react';
import {Layout,Row,Col,Menu,Divider,Icon,Dropdown,Button}from 'antd';
import{Link}from 'react-router-dom';

import Nav from './nav';
class MinHeader extends Component{

    render(){
        return(
            <Layout.Header>
                <Row className="wrap">
                    <Col md={6} xs={24}>
                        <h1 id="logo">cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider type="vertical" className="headerDivider"></Divider>
                        <Nav mode="horizontal" id="nav"/>
                    </Col>
                    <Col md={0} xs={24} className="xsNav">
                        <Dropdown
                            overlay={<Nav mode="vertical" id="xsNav"/>}
                            trigger={["click","touchend"]}
                            placement="bottomRight"
                        >
                            <Button><Icon type="bars"/></Button>
                        </Dropdown>

                    </Col>
                </Row>
            </Layout.Header>
        )
    }
}

export default MinHeader;