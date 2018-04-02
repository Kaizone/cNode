/**
 * Created by kk on 2018/4/2.
 */
import React,{Component} from 'react';
import {Link,withRouter}from 'react-router-dom';
import{Menu,Row,Col}from 'antd';
let tab = [
    {
        tab:"all",
        txt: "全部"
    },{
        tab:"good",
        txt: "精华"
    },{
        tab:"ask",
        txt: "问题"
    },{
        tab:"share",
        txt: "分享"
    },{
        tab:"job",
        txt: "招聘"
    },{
        tab:"dev",
        txt: "测试"
    }
];
class IndexMenu extends Component{

    constructor(args){
        super(args);
        let now = this.getNow(this.props.location);
        this.state={
            now
        }


    }

    getNow(location){
        let now = location.pathname.split('/');

        return now[2]
    }

    shouldComponentUpdate(nextProps){
        let now = this.getNow(nextProps.location);
        if(now != this.state.now){
            this.setState({
                now
            });
            return false
        }
        return true
    }
    render(){
        return (
            <Menu
                id="index-nav"
                selectedKeys={[this.state.now]}

            >

                {tab.map((item,index)=>{
                    return(
                        <Menu.Item key={item.tab} >
                            <Link to={"/index/"+item.tab}>{item.txt}</Link>
                        </Menu.Item>
                    )
                })}

            </Menu>
        )
    }
}


export default withRouter((props)=>{
    let{mode,id,location} = props;

    return(
        <IndexMenu
            mode={mode}
            id={id}
            location={location}
        >
        </IndexMenu>
    )
});