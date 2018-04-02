/**
 * Created by kk on 2018/4/1.
 */
import React,{Component} from 'react';
import {Tag} from 'antd';

const tab = {
    top:{
        color:"magenta",
        txt:"置顶"
    },
    good:{
        color:"geekblue",
        txt:"精华"
    },
    job:{
        color:"cyan",
        txt:"招聘"
    },
    share:{
        color:"purple",
        txt:"分享"
    },
    dev:{
        color: "lime",
         txt: "测试"
    },
    ask:{
        color:"green",
        txt:"问答"
    }
} ;

function getTab(data){
    return(
        data.top?
            "top":
                data.good?
                    "good":data.tab
    )
}

class TxtTag extends Component{

    render(){

        let nowTab = tab[getTab(this.props.data)];
        console.log(nowTab)
        return <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    }
}

export default TxtTag;