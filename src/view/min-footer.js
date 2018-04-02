/**
 * Created by kk on 2018/4/1.
 */

import React,{Component}from 'react';
import {Layout,Row,Col}from 'antd';


class MinFooter extends Component{

    render(){
        return (
            <Layout.Footer>
                <Row>
                    <Col style={{textAlign:"center"}}>京ICP备08102442号-1 2007-2018 MIAOV.COM 版权所有</Col>
                </Row>
            </Layout.Footer>
        )
    }
}

export default MinFooter;