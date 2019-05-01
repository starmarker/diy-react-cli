import React, {Component} from 'react';
import '@/assets/css/test.css';
import '@/assets/less/index.less';
import {Button} from 'antd';
import {increment,decrement,reset} from 'actions/counter';
import {connect} from 'react-redux';
import {ModalForm as DialogForm}  from '../Form/Dialog'
// import {hot} from 'react-hot-loader'
 class Hello extends Component {
    constructor(props){
        super(props);
        this.abc=props.match ;
        this.state={count:0,
            visible:false,
            confirmLoading:false,
        };
        // this.handlerClick.bind(this)
        
    }
    // handlerClick=()=>{
    //     // let count=this.state.count;
    //     // count++
    //     // console.log(this.state)
    //     // this.setState({
    //     //     count:this.state.count+2
    //     // });
    // }
    showModal=()=>{
        console.log('打开对话框')
        this.setState({
            visible:true
        })
    }
    handleCancel=()=>{
        this.setState({
            visible:false
        })
    }
    handleOk=()=>{
        console.log("点击确定")
        this.setState({
            confirmLoading:true,
        });
        setTimeout(()=>{
            this.setState({
                confirmLoading:false,
                visible:false,
            })
        },2000);
    }
    componentWillMount(){
        console.log(this.props)
    }
    render() {
        // const IMG=resolve('IMG');
        const submit=value=>{
            console.log(value)
        }
        return (
            <div>
                Hello,React!这是第一个react项目，继续测试一下
                <div className="test">
                test文字样式测试{this.props.name}
                计数器：{this.props.counter.count}
                </div>
                <Button type="primary" onClick={() => this.props.increment()}>自增1</Button>
                <Button type="default" onClick={() => this.props.decrement()}>减少1</Button>
                <Button type="danger" onClick={() => this.props.reset()}>重置0</Button>
                <Button type="success" onClick={this.showModal}>打开对话框</Button>
                <DialogForm title="测试标题" onSub={submit} visible={this.state.visible} confirmLoading={this.state.confirmLoading} onOk={this.handleOk} onCancel={this.handleCancel}/> 
                {/* <img src={require('@IMG/content.jpg')} style={{width:'100%'}}/> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
// if (module.hot) {
//     module.hot.accept()
// }