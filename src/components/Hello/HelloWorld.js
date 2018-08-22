import React, {Component} from 'react';
import '@/assets/css/test.css';
import '@/assets/less/index.less';
import {Button} from 'antd';
export default class Hello extends Component {
    constructor(props){
        super();
        this.abc=props.match ;
    }
    render() {
        
        return (
            <div>
                Hello,React!这是第一个react项目，继续测试一下
                <div className="test">
                test文字样式测试{this.props.name}
                </div>
                <Button type="primary">基础按钮</Button>
                <Button type="success">成功按钮</Button>
            </div>
        )
    }
}