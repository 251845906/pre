import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
    constructor(props){
            super(props);
            this.state={
                login:false,
                menu:false
            }
    }
    handHoverIn=()=>{
        this.setState({menu:true})
    }
    handHoverOut=()=>{
        this.setState({menu:false})
    }
    render(){
        let lon;
        this.state.login ? lon = <div className='Login'><a className='message'>消息</a><div className='user' onMouseEnter={this.handHoverIn.bind(this)} onMouseLeave={this.handHoverOut.bind(this)}>
            <i className="avatar"  ><img src="//qzapp.qlogo.cn/qzapp/100410602/9773AB1A86257528D1420E42CC7021BC/100?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="120"/></i>
            <ul className={this.state.menu ? 'open dropdown-menu' :'dropdown-menu'} >
                <li>
                    <a href="">
                        <span>我的主页</span>
                    </a>         
                </li>
                <li>
                    <a href="">
                      <span>我的收藏</span>
                    </a>         
                </li>
              
                <li>
                    <a rel="nofollow"  href="">
                       <span>退出</span>
                    </a>         
                </li>
            </ul></div><a className='on'>记仇</a></div>
            : lon = <div className='noLogin'><Link to='SignIn'>登陆</Link><a>注册</a><a className='on'>记仇</a></div>
           
        return(
           <div>
                <div className='header'>
                    <div className='container'>
                        <div className='left'> <h2>咕噜咕噜·小本本</h2> </div>
                        <div className='right'>  {lon} </div>
                    </div>
                </div>
           </div>
        )
    }
}
export default Header;