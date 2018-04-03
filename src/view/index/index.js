/**
 * Created by kk on 2018/4/1.
 */
import React,{Component} from 'react';
import{Row,Col,Pagination}from 'antd';
import IndexMenu from './indexMenu';
import Indexlist from './list';
class Index extends Component{

    render(){
        let tab = this.props.match.params.id;
        return (

            <Row className="wrap">
                <Col md={6}>
                    <IndexMenu/>
                </Col>

                <Col md={18} className="index-list" >
                    <Indexlist tab={tab}></Indexlist>
                </Col>
            </Row>
        )
    }
}

export default Index;