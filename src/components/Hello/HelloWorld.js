import React, {Component} from 'react';
import '@/assets/css/test.css';
import '@/assets/less/index.less';
export default class Hello extends Component {
    
    render() {
        const abc=1;
        return (
            <div>
                Hello,React!这是第一个react项目，继续测试一下
                <div className="test">
                test文字样式测试{abc}
                </div>
                <button className="primary">基础按钮</button>
                <button className="success">成功按钮</button>
            </div>
        )
    }
}