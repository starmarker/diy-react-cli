import React,{Component} from 'react';
// import ReactDom from 'react-dom';
import Axios from 'axios';
import {List,Avatar,Button} from 'antd';

class JokeList extends Component{
    constructor(props){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        Axios.get('https://www.apiopen.top/novelApi',{}).then(res=>{
            let list=res.data.data;
            this.setState({
                list:list
            },()=>{console.log(this.state)})
        })
    };
    handlerClick=()=>{
        console.log(this.list)
    }
    render(){
        return (
            <div>
                <List
                itemLayout="horizontal"
                dataSource={this.state.list}
                ref={(list)=>this.list=list}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.book_cover} />}
                    title={<a href={item.url}>{item.bookname}</a>}
                    description={item.introduction}
                    />
                </List.Item>
                )}
                />
                <Button onClick={this.handlerClick}>点击测试</Button>
            </div>
        )
    }
}
export default JokeList;