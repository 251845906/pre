import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleChange=(e)=>{
        console.log(e.target.name)
    }
    outChange=()=>{

    }
    handSubmit=()=>{

    }
    render() {
        return (
            <div className="SignUp">
                <div className='main'>
                    <h4 className="title">
                        <div className="normal-title">
                            <Link to='SignIn'>登录</Link>
                            <b>·</b>
                            <Link id="js-sign-up-btn" className="active" to="SignUp">注册</Link>
                        </div>
                    </h4>
                    <form onChange={this.handleChange.bind(this)}>
                        <div className="js-sign-in-container">
                            <div className="input-prepend restyle">
                                <input placeholder="你的昵称" type="text" name="user[nickname]" id="user_nickname" />
                                <i className="iconfont ic-user"></i>
                            </div>

                            <div className="input-prepend restyle js-normal">
                                <input placeholder="手机号" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number" />
                                <i className="iconfont ic-user"></i>
                            </div>



                            <div className="input-prepend">
                                <input placeholder="设置密码" type="password" name="session[password]" id="session_password" />
                                <i className="iconfont ic-password"></i>
                            </div>


                            <input type="submit" name="commit" value="注册" className="sign-in-button" />


                            <div className="more-sign">
                                <h6>社交帐号登录</h6>
                                <ul>
                                    <li><a className="weibo" target="_blank" href="/users/auth/weibo"><i className="iconfont ic-weibo"></i></a></li>
                                    <li><a className="weixin" target="_blank" href="/users/auth/wechat"><i className="iconfont ic-wechat"></i></a></li>
                                    <li><a className="qq" target="_blank" href="/users/auth/qq_connect"><i className="iconfont ic-qq_connect"></i></a></li>
                                </ul>

                            </div>
                        </div>
                   </form>
                </div>

            </div>
        )
    }
}


export default SignUp;