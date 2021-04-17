'use strict'

const Controller = require("egg").Controller

class MainController extends Controller{
    async index(){
        this.ctx.body = "login api";
    }

    async checkLogin(){
        let {useName,password} = this.ctx.body;
        let res = await this.ctx.mysql.query("blog_user",{useName,password});

        if(res.length > 0){
            let openId = Date.now();
            this.ctx.session.openId = openId;
            this.ctx.body = {data:{msg:"登录成功",statusCode:"200",openId:openId}}
        }else{
            this.ctx.body = {data:{msg:"登录失败",statusCode:"401",openId:null}}
        }
    }

    async getBlogType(){
        let res = await this.ctx.mysql.select("blog_type",{});
        this.ctx.body = {data:res}
    }
}

module.exports = MainController;