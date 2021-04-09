'use strict';

const { Controller } = require("egg");

class HomeController extends Controller{
    async index(){
        let result = await this.app.mysql.get("blog_content",{});
        this.ctx.body = result;
    }

    async getArticleList(){
        let sql = `
        SELECT * FROM blog_article a LEFT JOIN blog_type b ON a.typeId = b.id;
        `;
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {data:results}
    }
}

module.exports = HomeController