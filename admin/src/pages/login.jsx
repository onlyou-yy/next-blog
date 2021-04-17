import React, { useState,useEffect } from "react";
import { Card, Input,Button ,Spin,message } from "antd";
import {UserOutlined,KeyOutlined} from "@ant-design/icons";
import "../static/css/login.css";
import axios from "axios";

const Login = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const checkLogin = () => {
        setIsLoading(true);
        if(!userName.trim()){
            message.error("用户名不能为空");
            return false;
        }
        if(!password.trim()){
            message.error("密码不能为空");
            return false;
        }
        let data = {userName:userName,password:password};
        axios({
            method:"post",
            url:"http://localhost:7001/admin/checkLogin",
            data:data,
            withCredentials:true
        }).then(res=>{
            if(res.data.data.stateCode == 200){
                localStorage.setItem("openId",res.data.data.openId);
                props.history.push("/adminIndex");
            }else{
                message.error("用户名或密码错误");
            }
        }).finally(res=>{
            setIsLoading(false);
        })
    }

    return (
        <>
            <div className="login-div">
                <Spin tip="Loading..." spinning={isLoading}>
                    <Card title="onlyCode Blog  System" bordered={true} style={{ width: 400 }} >
                        <Input
                            id="userName"
                            size="large"
                            placeholder="Enter your userName"
                            prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                            onChange={(e)=>{setUserName(e.target.value)}}
                        /> 
                        <br/><br/>
                        <Input.Password
                            id="password"
                            size="large"
                            placeholder="Enter your password"
                            prefix={<KeyOutlined style={{color:'rgba(0,0,0,.25)'}} />}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />     
                        <br/><br/>
                        <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                    </Card>
                </Spin>
        </div>
        </>
    )
}

export default Login;