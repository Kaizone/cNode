/**
 * Created by kk on 2018/4/2.
 */
import React,{Component} from 'react';
import {Card} from 'antd';

class CardTemplate extends Component{

    render(){
        let data = this.props.data;
        return (
            <div className="wrap">

                {data.map( (item,index)=>(
                    <Card
                        type="inner"
                        loading={false}
                        title={item.title}
                        key={index}>
                        <div dangerouslySetInnerHTML={
                                    {__html:item.content}
                                }>
                        </div>
                    </Card>)
                )}
            </div>
        )
    }
}

export default CardTemplate;