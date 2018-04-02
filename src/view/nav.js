/**
 * Created by kk on 2018/4/1.
 */
import React,{Component}from 'react';
import {Layout,Row,Col,Menu,Divider,Icon,Dropdown,Button}from 'antd';
import {Link,withRouter} from 'react-router-dom';

class Nav extends Component{

    constructor(args){
        super(args);
        let nowShow = this.getNow(this.props.location)
        this.state = {
            nowShow
        };
    }

    getNow(location){
        let nowShow = location.pathname.split('/');
        return nowShow[1]
    }

    shouldComponentUpdate(nextProps){
        let nowShow = this.getNow(nextProps.location);
        if(nowShow !== this.state.nowShow){
            this.setState({
                nowShow
            });

            return false
        }

        return true;
    }
    render(){
        let {mode,id} = this.props;
        return(
            <Menu mode={mode} id={id} theme="light" selectedKeys={[this.state.nowShow]} >
                <Menu.Item key="index">
                    <Link to="/index/all" ><Icon type="home"/>首页</Link>
                </Menu.Item>
                <Menu.Item key="book">
                    <Link to="/book" ><Icon type="book"/>教程</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about"><Icon type="info-circle-o"/>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter((props)=>{
    console.log(props)
    let{mode,id,location} = props;
    return(
        <Nav
            mode={mode}
            id={id}
            location={location}
        ></Nav>
    )
});