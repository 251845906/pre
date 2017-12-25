import React,{Component} from 'react';
import './SignIn.css';
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="SignIn">
              <div className='main'>
                    <h4 className="title">
                        <div className="normal-title">
                            <a className="active" href="/sign_in">登录</a>
                            <b>·</b>
                            <a id="js-sign-up-btn" className="" href="/sign_up">注册</a>
                        </div>
                    </h4>
                    <div className="js-sign-in-container">

                       
                        <div className="input-prepend restyle js-normal">
                            <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number" />
                            <i className="iconfont ic-user"></i>
                        </div>



                        <div className="input-prepend">
                            <input placeholder="密码" type="password" name="session[password]" id="session_password" />
                            <i className="iconfont ic-password"></i>
                        </div>
                        <input value="false" type="hidden" name="session[oversea]" id="session_oversea" />


                        <div className="remember-btn">
                            <input type="checkbox" value="true" defaultChecked="checked" name="session[remember_me]" id="session_remember_me" /><span>记住我</span>
                        </div>

                        <input type="submit" name="commit" value="登录" className="sign-in-button" data-disable-with="登录" />


                        <div className="more-sign">
                            <h6>社交帐号登录</h6>
                            <ul>
                                <li><a className="weibo" target="_blank" href="/users/auth/weibo"><i className="iconfont ic-weibo"></i></a></li>
                                <li><a className="weixin" target="_blank" href="/users/auth/wechat"><i className="iconfont ic-wechat"></i></a></li>
                                <li><a className="qq" target="_blank" href="/users/auth/qq_connect"><i className="iconfont ic-qq_connect"></i></a></li>
                            </ul>

                        </div>
                    </div>
              </div>

            </div>
        )
    }
}


export default SignIn ;