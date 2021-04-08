'use strict';

const { Controller } = require("egg");

class HomeController extends Controller{
    async index(){
        this.ctx.body = "api 接口"
    }
}

module.exports = HomeController